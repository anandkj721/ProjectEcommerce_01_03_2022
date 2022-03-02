import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAdmin } from 'src/app/Iadmin';
import { AdminloginService } from 'src/app/services/adminlogin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!: FormGroup;
  selectedMessage:any;
  constructor(private formbuilder:FormBuilder,private adminService:AdminloginService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({        
    });

    this.adminService.currentMessage.subscribe(message => (this.selectedMessage= message
      ));
  }

  logout(endadmin:string){
  
    alert("Logout Successfully..!!");
    this.router.navigateByUrl('/productPage');
    
  }

}
