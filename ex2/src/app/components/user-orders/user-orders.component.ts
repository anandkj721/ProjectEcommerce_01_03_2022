import { Element, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICustomerOrderInformation } from 'src/app/customerOrderInformation';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  allProduct!:Observable<ICustomerOrderInformation []>;
   UserOrderDetails! : Observable<ICustomerOrderInformation []>;
  userOrderName:any;
  userName!:string;
  lastname!:string;
  firstName!:string;
  UserOrderDetailsForm!:FormGroup;
  public products : any []= [];
  TotalProductInformation:any[]=[];
  studentList:any = [];
  constructor(private userService:UserService,private orderDetailsService:OrderDetailsService) { }

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(message => (this.userName= message
      ));

      this.UserOrderDetailsForm = new FormGroup({
        firstName: new FormControl()
    });
      var a=this.userName
     this.loadUserOrder(a);
  }
  loadUserOrder(userNameOrder:string){
    debugger;
    userNameOrder=this.userName;  
    //  this.orderDetailsService.getUserNameOrder(userNameOrder).subscribe(userOrder=>{
    //    debugger;
    //    this.studentList= userOrder;
       
    //    this.studentList.forEach(() => {
    //     this.products.push(this.studentList);
      
    //    });


    //    for(var i of this.studentList){
      
    //     this.studentList.push(i);
    //     console.log("loadUserOrder():"+this.studentList);

     
        
    //     this.firstName=i.products.firstName;
    //     this.userName=i.product.userName;
    //     debugger;
    //     this.lastname=i.lastName;
    //     debugger;
    //    console.log("loadUserOrder():"+this.firstName);
    //   }

    //    })
    //***************************** */


       this.userService.currentMessage.subscribe(message => (this.userName= message
        ));
      
      this.orderDetailsService.getUserNameOrder(userNameOrder)
      .subscribe(res=>{
        debugger;
        this.products.push(res) ;    
        const cartProduct={products:this.products,quantity:this.products}
       
        this.products.forEach(element => {
       debugger;
         this.TotalProductInformation.push(this.products);
       
         
        });
        
  
        for(var i of this.products){
        
          this.TotalProductInformation.push(i);
          this.lastname=i.product.lastname;
          console.log("*****************"+this.lastname);
          debugger;
          this.firstName=i.product.firstName;
          console.log("*****************"+this.firstName);
         debugger;
        }
        
      });
  }

}
