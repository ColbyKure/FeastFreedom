import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { HttpClient } from '@angular/common/http';
//import { error } from 'console';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    uModel = new User();
    kModel = new Kitchen();

    formEmail: String;
    formPassword: String;
    formConfPass: String;
    formFirstName: String;
    formLastName: String;
    formKitchenName: String;
    focus;
    focus1;

    typeAccountSelected: boolean;
    constructor(private uService:ApiserviceService,
        private httpClient: HttpClient,
        private router:Router) { }

    ngOnInit() {}

    typeSelected(x: number){

        if(x == 1){

            this.typeAccountSelected = true;

        }else{

            this.typeAccountSelected = false;

        }

    }

    kitchen(){

        if(this.typeAccountSelected == true){

            return true;

        }else{

            return false;

        }

    }

    regularUser(){

        if(this.typeAccountSelected == false){

            return true;

        }else{

            return false;

        }

    }

    onSubmit(signupForm){

        if(this.formPassword != this.formConfPass){
            this.router.navigate(['/signup']);
        }
        else{
        if(this.regularUser() == true){

            localStorage.setItem('currformEmail', JSON.stringify(this.formEmail));
            localStorage.setItem('currformPassword', JSON.stringify(this.formPassword ));
            localStorage.setItem('currformFName', JSON.stringify(this.formFirstName));
            localStorage.setItem('currformLName', JSON.stringify(this.formLastName));
            console.log(localStorage.getItem('currformEmail'))
            //console.log(localStorage.getItem('currformPassword'))
            console.log(localStorage.getItem('currformFName'))
            console.log(localStorage.getItem('currformLName'))
            this.router.navigate(['/signupuser']);
        }
        else if(this.kitchen() == true){
            
            localStorage.setItem('currformEmail', JSON.stringify(this.formEmail ));
            localStorage.setItem('currformPassword', JSON.stringify(this.formPassword ));
            localStorage.setItem('currformKitchenName', JSON.stringify(this.formKitchenName ));  
            console.log(localStorage.getItem('currformEmail'))
            //console.log(localStorage.getItem('currformPassword'))
            console.log(localStorage.getItem('currformKitchenName'))
            this.router.navigate(['/signupkitchen']);

        }
        }
    }
    
}
