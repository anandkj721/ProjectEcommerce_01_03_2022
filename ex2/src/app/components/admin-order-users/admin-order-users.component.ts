import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ICustomerOrderInformation} from 'src/app/customerOrderInformation';
import { filter, Observable } from 'rxjs';
import {FillterPipe } from 'src/app/shared/fillter.pipe'
@Component({
  selector: 'app-admin-order-users',
  templateUrl: './admin-order-users.component.html',
  styleUrls: ['./admin-order-users.component.css']
})
export class AdminOrderUsersComponent implements OnInit {

  allProduct!:Observable<ICustomerOrderInformation []>;
  


  constructor(private orderDetailsService:OrderDetailsService ) { }

  ngOnInit(): void {
    //this.getAdminOrderUser();
    //this.getAllUsers();
    this.getProduct();
  }

  getAdminOrderUser(){
    //this.orderDetailsService.getAdminOrderUser().subscribe(adminOrderUsers=>this.adminOrderUsers=adminOrderUsers);
  }

  getAllUsers(){
    //this.allUsers=this.orderDetailsService.getAllUsers();
  }
  getProduct(){
    this.allProduct=this.orderDetailsService.getProduct();
  }

}
