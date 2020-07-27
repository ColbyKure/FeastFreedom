import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { Product } from 'app/models/Product';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  private name:String;
  private Price:Number;
  private Description:String;
  private ImgPath:String;
  private Category:Number;
  private selectedFile:File;
  private currItem:Product = new Product();
  private kitid:any;

  constructor(
    private kService:ApiserviceService,
    private http: HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.kitid = JSON.parse(localStorage.getItem('kitchenid'));
    this.currItem = JSON.parse(localStorage.getItem('currItem'));
    console.log("loading from this item: " + this.currItem);
    this.name = this.currItem.ItemName;
    this.Price = this.currItem.Price;
    this.Description = this.currItem.ItemDescription;
    this.ImgPath = this.currItem.ImagePath;
    this.Category = this.currItem.ItemCategory;
  }
  
  onFileChanged(event) {
    if(event.target.files[0] != null) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(uForm:any) {
    this.currItem.ItemName = this.name;
    this.currItem.Price = this.Price;
    this.currItem.ItemDescription = this.Description;
    this.currItem.ItemCategory = this.Category;
    //this.currItem.ImagePath = this.ImgPath;
    this.currItem.ImagePath = '/assets/img/upload.png'
    let promise = this.kService.putProduct(this.currItem).toPromise();
    promise.then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error);
    });
    this.router.navigate(['/products']);
    location.reload();
  }

  typeSelected(ItemType:Number) {
    this.Category = ItemType;
  }

}
