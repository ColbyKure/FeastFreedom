import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
//import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private loggedIn : boolean; //
    private typeUser : boolean; // true = Regular User ; false =  Kitchen
    private userName : string;

    constructor(public location: Location, private element : ElementRef, private router:Router) {
        this.sidebarVisible = false;
        this.loggedIn = false;
        if(localStorage.getItem('currUserID') != null){
            this.userName = JSON.parse(localStorage.getItem('currUserName'));
            this.loggedIn =  true;
            if(localStorage.getItem('isKitchen') == "true"){
                this.userName += " (kitchen)";
                this.typeUser = false;
            }else{
                this.userName += " (user)";
                this.typeUser = true;
            }
        } else{
            this.loggedIn = false;
        }
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    
    isRegularUser(){
        if(this.typeUser){
            return true;
        }else{
            return false;
        }
    }

    isLoggedIn(){
        if(this.loggedIn){
            return true;
        }else{
            return false;
        }
    }

    onLogout(){
        localStorage.removeItem('currUserToken');
        localStorage.removeItem('currUserName');
        localStorage.removeItem('currUserID');
        localStorage.removeItem('isKitchen');
        localStorage.removeItem('errorLogin')
        this.router.navigate(['/homepage']);
        location.reload();
    }

    kitchenMyAccount() {
        this.router.navigate(['/products']);
    }

    userMyAccount() {
        this.router.navigate(['/user-profile']);
    }
}
