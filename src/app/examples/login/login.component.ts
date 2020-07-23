import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isKitchen:Boolean = null;
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
    let promise;
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
        console.log('storage after set: user');
        this.printUserLocalStorage();
      }).catch((error) => {
        console.log('This is the error')
        console.log(error)
        this.errMsg = error
      });
    }
    else {
      console.log('calling authKitchen');
      this.kModel.Email = this.formEmail;
      this.kModel.Password = this.formPassword;
      this.kService.authorizeKitchen(this.kModel).subscribe(
        (data) => {
          console.log('This is the data')
          console.log(data)
          this.users = data;
          localStorage.setItem('currUserToken', JSON.stringify(this.users.token));
          localStorage.setItem('currUserName', JSON.stringify(this.users.user.KitchenName));
          localStorage.setItem('currUserID', JSON.stringify(this.users.user._id));
          console.log('storage after set: kitchen');
          this.printUserLocalStorage();
        },
        (error) => {
          console.log('This is the error')
          console.log('error')
          this.errMsg = error
        }
      )
    };
    console.log('showing user, error, and storage');
    console.log(this.users);
    console.log(this.errMsg);
    this.printUserLocalStorage();

    
    if(this.isKitchen === null) {
      console.log('user not logged in.')
      console.log(this.isKitchen)
      alert("Email or Password in incorrect")
    }
    else if(this.isKitchen) {
      console.log('kitchen has logged in.');
      localStorage.setItem('isKitchen', 'true');
      this.router.navigate(['/home']);
    }
    else {
      console.log('user has logged in.');
      localStorage.setItem('isKitchen', 'false');
      this.router.navigate(['/kitchen']);
    }
  }
}
