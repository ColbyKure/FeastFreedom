import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { FormArray, Validators } from '@angular/forms';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupkitchen',
  templateUrl: './signupkitchen.component.html',
  styleUrls: ['./signupkitchen.component.css']
})
export class SignupkitchenComponent implements OnInit {

  // public kitchenForm;
  kModel = new Kitchen();
  formKtype:String;
  //formDays: String;
  formOtime: String;
  formCtime: String;
  formImage: String;
  errMsg:String;
  kitchens: any;

  email = JSON.parse(localStorage.getItem('currformEmail'));
  password = JSON.parse(localStorage.getItem('currformPassword'));
  name = JSON.parse(localStorage.getItem('currformKitchenName'));

  
  constructor(private kService:ApiserviceService,
    private router:Router) {
    
   }

   ngOnInit(): void {
  
    }

    removeKitchenLocalStorage() {
      localStorage.removeItem('currformEmail');
     localStorage.removeItem('currformPassword');
     localStorage.removeItem('currformKitchenName');
   } 

    async onSubmit(kForm){
      //console.log('user storage before remove');
      let promise:any;
        this.kModel.Email = this.email;
        this.kModel.KitchenName = this.name;
        this.kModel.Password = this.password;
        this.kModel.KitchenType = this.formKtype;
        this.kModel.WorkingDays = "Monday";
        this.kModel.OpenTime = this.formOtime;
        this.kModel.CloseTime = this.formCtime;
        this.kModel.ImagePath = this.formImage;
        this.removeKitchenLocalStorage();
        console.log(this.kModel.Email)
        console.log(this.kModel.Password)
        console.log(this.kModel.KitchenName)
        console.log(this.kModel.KitchenType)
        //console.log(this.kModel.WorkingDays)
        console.log(this.kModel.OpenTime)
        console.log(this.kModel.CloseTime)
        console.log(this.kModel.ImagePath)
        
        promise = this.kService.postKitchen(this.kModel).toPromise();
        promise.then((data) => {
          this.kitchens = data;
          this.router.navigate(['/createitem'])
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


