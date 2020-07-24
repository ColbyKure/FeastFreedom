import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../../models/kitchen';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.css']
})
export class KitchensComponent implements OnInit {

  private listKitchens: Kitchen[] = [

    /*{ "_id": 0, "KitchenName": "Mcdonalds", "Email": "conctact@mcdonalds.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/mcdonald.jpg", "items": { }},
    { "_id": 1, "KitchenName": "Wendys", "Email": "conctact@endys.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/wendys.jpg", "items": { } },
    { "_id": 1, "KitchenName": "Burger King", "Email": "conctact@burgerking.com",  "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/burgerking.jpg", "items": { } }*/

  ];
  private selectedKitchen: Kitchen;

  constructor(private router:Router, private kService: ApiserviceService) { 

    this.listKitchen();

  }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    if (localStorage.getItem('errorLogin')){
      this.router.navigate(['/login']);
    }
  }

  onSelect(kitchen: Kitchen): void{

    this.selectedKitchen = kitchen;
    console.log(kitchen.KitchenName);

  }

  getSource(kitchen: Kitchen){

    return kitchen.ImagePath;

  }

  kitchenMenu(kitchen: Kitchen){

    console.log("Kitchen Menu");

  }

  async listKitchen(){

    let promise = this.kService.getKitchen().toPromise();
    promise.then((data) => {

      console.log(data);
      
      for(let i=0;i<data.length;i++){

        
        var kit: Kitchen = 
        { "_id": data[i]._id, 
        "KitchenName": data[i].KitchenName, 
        "Email": data[i].Email, 
        "Password": data[i].Password, 
        "KitchenType": data[i].KitchenType, 
        "WorkingDays": data[i].WorkingDays, 
        "OpenTime": data[i].OpenTime, 
        "CloseTime": data[i].CloseTime, 
        "ImagePath": data[i].ImagePath, 
        "items": data[i].items
        }
        this.listKitchens.push(kit);
      }

    }).catch((error) => {
      
      console.log("Error getting the kitchens");

    });

  }

}
