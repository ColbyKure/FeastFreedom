import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  itemName:String;
  Price:Number;
  Description:String;
  ImgPath:String;
  Category:Number;
  selectedFile:File;
  currItem:Product;

  constructor(
    private kService:ApiserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.currItem = JSON.parse(localStorage.getItem('currItem'));
    console.log("loading from this item: " + this.currItem);
    this.itemName = this.currItem.ItemName;
    this.Price = this.currItem.Price;
    this.Description = this.currItem.ItemDescription;
    this.ImgPath = this.currItem.ImagePath;
    this.Category = this.currItem.ItemCategory;
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    console.log(this.selectedFile)
  }

  onSubmit() {
    console.log('submitted')
    console.log('name,price,description,path,category,file')
    console.log(this.itemName)
    console.log(this.Price)
    console.log(this.Description)
    this.ImgPath = '/assets/img/' + this.selectedFile.name;
    console.log(this.ImgPath)
    console.log(this.Category)
    console.log(this.selectedFile)
  }

  showFiles() {
    console.log('inside show files')
  }

  typeSelected(ItemType:Number) {
    this.Category = ItemType;
  }

}
