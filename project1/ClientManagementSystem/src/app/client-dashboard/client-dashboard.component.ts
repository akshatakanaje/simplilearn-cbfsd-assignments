import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ClientModel } from './client-dashboard.model';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  
  formValue !: FormGroup;
  clientModelObj : ClientModel = new ClientModel();
  clientData !: any;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : ['']
    })
  }  
  postClientDetails(){
    this.clientModelObj.firstName = this.formValue.value.firstName;
    this.clientModelObj.lastName = this.formValue.value.lastName;
    this.clientModelObj.email = this.formValue.value.email;
    this.clientModelObj.mobile = this.formValue.value.mobile;

    this.api.postClient(this.clientModelObj)
    .subscribe(res=>{
       console.log(res);
       alert("Client Added Successfully")
       this.formValue.reset();
    },   
    err=>{
      alert("Something Went Wrong ");
    })   
  }
}
