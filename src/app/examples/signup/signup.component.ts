import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    typeAccountSelected: boolean;

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

    constructor() { }

    ngOnInit() {}
}
