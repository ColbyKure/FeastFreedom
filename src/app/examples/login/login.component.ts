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
  isUser = false;
  public uModel = new User();

  constructor(private uService:ApiserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(uForm){

    this.uService.authorizeUser(this.uModel).subscribe(
      (data) => {
        this.users = data;
        localStorage.setItem('currUserToken', JSON.stringify(this.users.token));
        localStorage.setItem('currUserName', JSON.stringify(this.users.user.UserName));
        localStorage.setItem('currUserID', JSON.stringify(this.users.user._id));
      },
      (error) => this.errMsg = error
    )
    if(this.isUser) {
      console.log('user has logged in.');
      localStorage.setItem('isUser', 'true');
    }
    else {
      console.log('kitchen has logged in.');
      localStorage.setItem('isUser', 'false');
    }
    console.log('Getting local storage')
    console.log(localStorage.getItem('currUserToken'))
    console.log(localStorage.getItem('currUserName'))
    console.log(localStorage.getItem('currUserID'))
    
    this.router.navigate(['/kitchen']);
  }
}
