import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isKitchen:Boolean;
  formEmail:String;
  formPassword:String;
  uModel = new User();
  kModel = new Kitchen();
  users:any;
  errMsg:String;
  token:String;
  name:String;
  ID:String;

  constructor(
    private uService:ApiserviceService, 
    private kService:ApiserviceService,
    private httpClient: HttpClient,
    private router:Router) { }

  ngOnInit(): void {
  }

  printUserLocalStorage() {
    let testToken = localStorage.getItem('currUserToken');
    let testName = localStorage.getItem('currUserName');
    let testID = localStorage.getItem('currUserID');
    console.log(testToken);
    console.log(testName);
    console.log(testID);
  }

  removeUserLocalStorage() {
    this.printUserLocalStorage();
    localStorage.removeItem('currUserToken');
    localStorage.removeItem('currUserName');
    localStorage.removeItem('currUserID');
    localStorage.removeItem('isKitchen');
  } 

  async onSubmit(uForm){
    console.log('user storage before remove');
    this.removeUserLocalStorage();
    let promise:any;
    if(!this.isKitchen) {
      console.log('calling authUser');
      this.uModel.Email = this.formEmail;
      this.uModel.Password = this.formPassword;
      promise = this.uService.authorizeUser(this.uModel).toPromise();
      promise.then((data) => {
        console.log('This is the data')
        console.log(data)
        this.users = data;
        localStorage.setItem('currUserToken', JSON.stringify(this.users.token));
        localStorage.setItem('currUserName', JSON.stringify(this.users.user.UserName));
        localStorage.setItem('currUserID', JSON.stringify(this.users.user._id));
        localStorage.removeItem('errorLogin');
        console.log('storage after set: user');
        this.printUserLocalStorage();
      }).catch((error) => {
        console.log('This is the error')
        console.log(error)
        this.errMsg = error
        this.router.navigate(['/login']);
        localStorage.setItem('errorLogin', 'not Logged in');
        alert("Email or Password in incorrect")
      });
    }
    else {
      console.log('calling authKitchen');
      this.kModel.Email = this.formEmail;
      this.kModel.Password = this.formPassword;
      promise = this.kService.authorizeKitchen(this.kModel).toPromise();
      promise.then((data) => {
        // console.log('This is the data')
        // console.log(data.user)
        this.users = data;
        localStorage.setItem('currUserToken', JSON.stringify(this.users.token));
        localStorage.setItem('currUserName', JSON.stringify(this.users.user.KitchenName));
        localStorage.setItem('currUserID', JSON.stringify(this.users.user._id));
        localStorage.removeItem('errorLogin');
        // console.log('storage after set: user');
        // this.printUserLocalStorage();
      }).catch((error) => {
        console.log('This is the error')
        console.log(error)
        this.errMsg = error
        this.router.navigate(['/login']);
        localStorage.setItem('errorLogin', 'not Logged in');
        alert("Email or Password in incorrect")
      });
    };
    if(this.isKitchen) {
      console.log('kitchen has logged in.');
      localStorage.setItem('isKitchen', 'true');
      this.router.navigate(['/homepage']);
    }
    else {
      console.log('user has logged in.');
      localStorage.setItem('isKitchen', 'false');
      this.router.navigate(['/kitchen']);
    }
  }
}
