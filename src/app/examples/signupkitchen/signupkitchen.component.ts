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
  kitchens:Kitchen = new Kitchen();

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
        //this.kModel.ImagePath = this.formImage;
        this.kModel.ImagePath = '/assets/img/upload.png'
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
          console.log('created kitchen: ' + this.kitchens)
          localStorage.setItem('currUserName', JSON.stringify(this.kitchens.KitchenName));
          localStorage.setItem('currUserID', JSON.stringify(this.kitchens._id));
          localStorage.setItem('kitchenid', JSON.stringify(this.kitchens._id));
          localStorage.setItem('isKitchen', 'true');
          localStorage.removeItem('errorLogin');
          this.router.navigate(['/login'])
        }).catch((error) => {
          console.log('This is the error')
          console.log(error)
          this.errMsg = error
          this.router.navigate(['/signup']);
          //localStorage.setItem('errorLogin', 'not Logged in');
          alert("wrong information")
        });
        
    }

    typeSelected(x: number){
      if(x == 1){
          this.formKtype = "Asian";
      }else if(x == 2){
        this.formKtype = "Burgers";
      }else if(x == 3){
            this.formKtype = "Cafe";
      }else if(x == 4){
          this.formKtype = "Fast Food";
      }else if(x == 5){
          this.formKtype = "Indian";
      }else if(x == 6){
        this.formKtype = "Italian";
      }else if(x == 7){
        this.formKtype = "Mexican";
      }else if(x == 8){
        this.formKtype = "Pizza";
      }else if(x == 9){
        this.formKtype = "Thai";
      }
  }
}


