import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  errMsg:string;
  hide = true;
  public uModel = new User();

  constructor(private uService:ApiserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(uForm){

    this.uService.authorizeUser(this.uModel).subscribe(
      (data) => {
        this.users = data;
        console.log('setting token in local storage: "currUserToken"')
        console.log(this.users.token)
        localStorage.setItem('currUserToken', JSON.stringify(this.users.token));
        console.log('setting name in local storage: "currUserName"')
        console.log(this.users.user.UserName);
        localStorage.setItem('currUserName', JSON.stringify(this.users.user.UserName));
        console.log('setting id in local storage: "currUserID"')
        console.log(this.users.user._id);
        localStorage.setItem('currUserID', JSON.stringify(this.users.user._id));
      },
      (error) => this.errMsg = error
    )
    console.log('Getting local storage')
    console.log(localStorage.getItem('currUserToken'))
    console.log(localStorage.getItem('currUserName'))
    console.log(localStorage.getItem('currUserID'))

    // this.router.navigate(['/users']);
  }
}
