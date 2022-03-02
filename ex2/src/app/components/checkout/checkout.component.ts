import { Component, OnInit } from '@angular/core';
import { ProductpageService } from 'src/app/services/productpage.service';
import { IProductpage } from 'src/IProductpage'; 
import { FormBuilder,FormGroup,Validators,FormGroupDirective,Form, FormControl,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/shared/cart.service';
import { filter } from 'rxjs';
import { customerOrderInformationModel } from 'src/app/customerOrderInformationModel';import { OrderDetailsService } from 'src/app/services/order-details.service';
import { UserService } from 'src/app/services/user.service';
;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  //****************
  productName!:string;
  productImage!:string;
  productDescription!:string
  productPrice!:number;
  productGrandTotal!:number;
  TotalProductInformation:any[]=[];
  customerOrderInformation!:FormGroup;
  public orderDetailsForm!:FormGroup;
  userName!:string;
  public customerOrderInformationModelObj = new customerOrderInformationModel();

  //****************
  constructor(private productpageService:ProductpageService,private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private orderDetailsService:OrderDetailsService,
    private cartService :CartService,private router:Router,private userService :UserService) { }
  
  public products : any []= [];
  public grandTotal! : number;

  ngOnInit(): void {

    //*************************
  
    this.orderDetailsForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      customerAddress: ['', Validators.required],
    });
    //findout username
    this.userService.currentMessage.subscribe(message => (this.userName= message
      ));
    //******************************
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;    
      const cartProduct={products:this.products,quantity:this.products}
     
      this.products.forEach(element => {
     
       localStorage.setItem('cartObj',JSON.stringify(cartProduct));
       this.TotalProductInformation.push(this.products);
     
       
      });
      
      this.grandTotal = this.cartService.getTotalPrice(cartProduct.products,cartProduct.quantity);
     //********************** *
      for(var i of this.products){
      
        this.TotalProductInformation.push(i);
        //console.log("*********1",+this.TotalProductInformation)
        this.productName=i.product.productName;
        this.productImage=i.product.productImage;
        this.productPrice=i.product.productPrice;
        this.productDescription=i.product.productDescription;
        this.productGrandTotal=this.grandTotal;
        console.log("***********"+this.productGrandTotal)
      }
      //******************* *
    });
  }
  //********************** *
  orderDetails(){
    debugger;
    this.customerOrderInformationModelObj.firstName=this.orderDetailsForm.value.firstName;
    this.customerOrderInformationModelObj.lastName=this.orderDetailsForm.value.lastName;
    this.customerOrderInformationModelObj.customerAddress=this.orderDetailsForm.value.customerAddress;
    this.customerOrderInformationModelObj.productName=this.productName;
    this.customerOrderInformationModelObj.productImage=this.productImage;
    this.customerOrderInformationModelObj.productDescription=this.productDescription;
    this.customerOrderInformationModelObj.productPrice=this.productPrice;
    this.customerOrderInformationModelObj.productGrandTotal=this.productGrandTotal;
    this.customerOrderInformationModelObj.userName=this.userName;
    this.orderDetailsService.orderDetails(this.customerOrderInformationModelObj)
    .subscribe(res=>{
      this.orderDetailsService.orderDetails(this.customerOrderInformationModelObj)
      this.resetsignUpForm();
      this.router.navigate(['/productpages'])
    })

    
  }
 
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
 
  resetsignUpForm(){
    this.orderDetailsForm.reset();
  }
 
}
