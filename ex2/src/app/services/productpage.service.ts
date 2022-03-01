import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProductpage } from 'src/IProductpage';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductpageService {

  private base_url="https://localhost:44389/api";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private httpClient:HttpClient) { }

  getProductPage():Observable<IProductpage []>{
    return this.httpClient.get<IProductpage []>(this.base_url+"/Productpages/Index");  
  }

  getProduct(){
    return this.httpClient.get<any>(this.base_url+"/Productpages/Index")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  productAdd(product:IProductpage):Observable<IProductpage>{
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.post<IProductpage>(this.base_url+"/ProductPages/Create",product,options);
  }

  getProductIdForm(employeeid:number):Observable<IProductpage >{
    return this.httpClient.get<IProductpage >(this.base_url+"/Productpages/Details/"+employeeid);
  }

  productUpdate(product:IProductpage):Observable<number>{
    
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.put<number>(this.base_url+"/ProductPages/Edit/"+product.id,product,options);
  }


  productDeleteById(productId:number):Observable<number>{
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.delete<number>(this.base_url+"/ProductPages/Delete/"+productId);
  }

}
