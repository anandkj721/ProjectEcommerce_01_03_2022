import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  selectedMessage:any;
  constructor( private router:Router,private userService:UserService) { }

  ngOnInit(): void {
   
    
  }

  // logout(){
  //   debugger;
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/productPage']);
  // }

}
