import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { PassThrough } from 'stream';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {

  uModel = new User();
  formQue1: Number;
  formAns1: String;
  formQue2: Number;
  formAns2: String;
  errMsg:String;
  users: any;

  email = JSON.parse(localStorage.getItem('currformEmail'));
  password = JSON.parse(localStorage.getItem('currformPassword'));
  fname = JSON.parse(localStorage.getItem('currformFName'));
  lname = JSON.parse(localStorage.getItem('currformLName'));
  name = this.fname +" "+ this.lname;

  constructor(private uService:ApiserviceService,
    private httpClient: HttpClient,
    private router:Router) { }

  ngOnInit(): void {
  }

   removeUserLocalStorage() {
      localStorage.removeItem('currformEmail');
     localStorage.removeItem('currformPassword');
     localStorage.removeItem('currformFName');
   } 

  async onSubmit(uForm){
    let promise:any;
      this.uModel.Email = this.email;
      this.uModel.UserName = this.name;
      this.uModel.Password = this.password;
      this.uModel.Question1 = this.formQue1;
      this.uModel.Answer1 = this.formAns1;
      this.uModel.Question2 = this.formQue2;
      this.uModel.Answer2 = this.formAns2;
      this.removeUserLocalStorage();
      console.log(this.uModel.Email)
      //console.log(this.uModel.Password)
      console.log(this.uModel.UserName)
      console.log(this.uModel.Question1)
      console.log(this.uModel.Answer1)
      console.log(this.uModel.Question2)
      console.log(this.uModel.Answer2)
      promise = this.uService.postUser(this.uModel).toPromise();
      promise.then((data) => {
        this.users = data;
        this.router.navigate(['/kitchens'])
      }).catch((error) => {
        console.log('This is the error')
        console.log(error)
        this.errMsg = error
        this.router.navigate(['/signup']);
        //localStorage.setItem('errorLogin', 'not Logged in');
        alert("wrong information")
      });
      
  }
    

}
