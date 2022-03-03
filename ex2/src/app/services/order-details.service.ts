import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICustomerOrderInformation} from 'src/app/customerOrderInformation'

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor( private httpClient:HttpClient) { }

  private base_url="https://localhost:44389/api";
 
  orderDetails(OrderObj : any){
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.post<ICustomerOrderInformation>(this.base_url+"/OrderDetail/Create",OrderObj,options);
 }

 
 getUserNameOrder(UserName:string):Observable<ICustomerOrderInformation >{

  return this.httpClient.get<ICustomerOrderInformation >(this.base_url+"/OrderDetail/Details/"+UserName);
}

getAdminOrderUser():Observable<ICustomerOrderInformation []>{

  return this.httpClient.get<ICustomerOrderInformation []>(this.base_url+"/OrderDetail/Index");  
}

getAllUsers(){
    
  return this.httpClient.get<any>(this.base_url+"/Users")
  .pipe(map((res:any)=>{
    return res;
  }))
}

getProduct(){
  return this.httpClient.get<any>(this.base_url+"/OrderDetail/Index")
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
