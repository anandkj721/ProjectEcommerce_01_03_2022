import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IUser } from '../IUser';
import {map} from 'rxjs/operators';
import { LoginComponent } from '../components/login/login.component';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  form!:FormGroup;

  private base_url ="https://localhost:44389/api";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private httpClient:HttpClient) { }
  addUser(user: any):Observable<IUser> {
    let httpheader=new HttpHeaders()
    .set('Content-type','application/json');
    let options={
      headers:httpheader
    };
    return this.httpClient.post<IUser>(this.base_url+"/Users",JSON.stringify(user), this.httpOptions);
  }

  userLogin(userObject:any):Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.base_url+"/Users");
  }

  find(id:number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.base_url+"/Users"+id);
   }


   public loginAPIUrl : string = "https://localhost:44389/api/Login/";
   signUp(UserObj : any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this.httpClient.post<IUser>(`${this.loginAPIUrl}signup`,UserObj)
  }
  login(UserObj:any){
    return this.httpClient.post<IUser>(`${this.loginAPIUrl}login`,UserObj)
  }

  getAllUsers(){
    
    return this.httpClient.get<any>(this.base_url+"/Users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //************************ *
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private loginUserName = new  BehaviorSubject(this.editDataDetails);
  currentMessage = this.loginUserName.asObservable();
  changeMessage(message: string) {
  this.loginUserName.next(message)
  }

}






