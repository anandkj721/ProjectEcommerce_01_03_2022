import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/shared/cart.service';
import { ProductpageService } from 'src/app/services/productpage.service';
import { IProductpage } from 'src/IProductpage'; 
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/UserModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 //for logout 
 showUserName=false;
 selectedMessage:any;

 //
  loginNgContainer=true;
  logoutNgContainer=true;
  message!:string;

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService:CartService,private productpageService:ProductpageService,
    private router:Router,private userService:UserService  ) { }
  
  productPage:IProductpage[]=[];

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    //find user name
    this.userService.currentMessage.subscribe(message => (this.selectedMessage= message
      ));
     
    //console.log("nav components:"+this.selectedMessage);
  }
  
  getProductPage(){
    this.productpageService.getProductPage().subscribe(productPage=>this.productPage=productPage)
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
   logout(){
     
    //this.logoutNgContainer=false;
    if(this.selectedMessage.length==0){
      alert ("Login First");
      this.router.navigate(['/login']);
    }
    else{
      this.logoutNgContainer=true;
    localStorage.removeItem('token');
    this.router.navigate(['/productPage']);
    this.totalItem = 0;
    this.loginNgContainer=true;
    this.selectedMessage="";
    }
    
  }

  login(){
    //this.loginNgContainer=false;
    this.loginNgContainer=true;
    this.router.navigate(['/login']);
    this.logoutNgContainer=true;
    this.showUserName=true;
  }

  adminLogout(){
    debugger;
    //this.logoutNgContainer=false;
    if(this.selectedMessage.length ==0){
      this.logoutNgContainer=true;
      localStorage.removeItem('token');
      this.router.navigate(['/adminLogin']);
      this.totalItem = 0;
      this.loginNgContainer=true;
      this.selectedMessage="";
      //
    }
    else{
      console.log("adminLogout()"+this.selectedMessage);
      alert ("User Logout First");
    }
    
  }
 
  

}
