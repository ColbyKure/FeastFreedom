import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../../models/kitchen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.css']
})
export class KitchensComponent implements OnInit {

  private listKitchens: Kitchen[] = [

    { "_id": 0, "KitchenName": "Mcdonalds", "Email": "conctact@mcdonalds.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/mcdonald.jpg", "items": { }},
    { "_id": 1, "KitchenName": "Wendys", "Email": "conctact@endys.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/wendys.jpg", "items": { } },
    { "_id": 1, "KitchenName": "Burger King", "Email": "conctact@burgerking.com",  "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "../../../assets/img/faces/burgerking.jpg", "items": { } }

  ];
  private selectedKitchen: Kitchen;

  constructor(private router:Router) { }

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

}
