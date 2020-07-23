import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../../models/kitchen';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  listKitchens: Kitchen[] = [

    { "_id": 0, "KitchenName": "Mcdonalds", "Email": "conctact@mcdonalds.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "./assets/img/faces/mcdonald.jpg", "items": { }},
    { "_id": 1, "KitchenName": "Wendys", "Email": "conctact@endys.com", "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "./assets/img/faces/wendys.jpg", "items": { } },
    { "_id": 1, "KitchenName": "Burger King", "Email": "conctact@burgerking.com",  "Password": "123", "KitchenType": 1, "WorkingDays": "All", "OpenTime": "9:00 A.M.", "CloseTime": "10:00 P.M.", "ImagePath": "./assets/img/faces/burger.jpg", "items": { } }

  ];
  private selectedKitchen: Kitchen;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(kitchen: Kitchen): void{

    this.selectedKitchen = kitchen;
    console.log(kitchen.KitchenName);

  }

}