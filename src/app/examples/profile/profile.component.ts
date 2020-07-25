import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    private loggedIn : boolean; //
    private typeUser : boolean; // true = Regular User ; false =  Kitchen
    public userName : String;

    constructor(private Uservice: ApiserviceService, private router:Router) {

        if(localStorage.getItem('currUserID') != null){

            let promise = this.Uservice.getUser().toPromise();
            promise.then((data) => {

                for(var i = 0; i < data.length ; i++){

                    if(data[i].UserName == localStorage.getItem('currUserID')){

                        var us: User;
                        this.userName = us.UserName;
                        console.log(this.userName);


                    }

                }
                console.log(data);
            

            }).catch((error) => {
            
                console.log("Error getting the user");

            });
            
        }

     }

    ngOnInit() {}

    isKitchen(){

        if(localStorage.getItem('isKitchen') == "true"){

            return true;

        }else{

            return false;
        }

    }

}
