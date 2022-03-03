import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/UserModel';
import { AuthService } from 'src/app/shared/auth.service';
import { first, Observable } from 'rxjs';
import { IUser } from 'src/app/IUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  
  userName!:any;
 
  submitted = false;

  public loginForm !: FormGroup;
  public loginObj = new UserModel();

  constructor(private formBuilder: FormBuilder,private http:HttpClient,
    private router:Router, public userService:UserService,
    private authService:AuthService
   ) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:["",Validators.compose([Validators.required,Validators.email])],
        password:["",Validators.required]
      });
     localStorage.clear();
  }
  login()
  {
   
  this.loginObj.userName = this.loginForm.value.email;
  this.loginObj.password = this.loginForm.value.password;
  this.userService.login(this.loginObj)
  .subscribe(res=>{
    debugger;
    localStorage.setItem('token',JSON.stringify(res.password));
    this.router.navigate(['/productPage']);
    this.userName=this.loginObj.userName;
    this.userService.changeMessage(this.userName);
    console.log("login components"+this.userName);
   
  },err=>{
    alert("soomething went wrong")
  }) 

  }
  
}

