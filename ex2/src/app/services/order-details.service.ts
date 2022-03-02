import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerOrderInformation} from 'src/app/customerOrderInformation'

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor( private httpClient:HttpClient) { }

  private base_url="https://localhost:44389/api";
  //public loginAPIUrl : string = "https://localhost:44389/api/Orderdetails/";
  orderDetails(OrderObj : any){
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.post<ICustomerOrderInformation>(this.base_url+"/OrderDetail/Create",OrderObj,options);
 }
}
