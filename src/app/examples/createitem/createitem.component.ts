import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { Product } from 'app/models/Product';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {

  private itemName:String = null;
  private Price:Number = null;
  private Description:String = null;
  private ImgPath:String = null;
  private Category:Number = null;
  private selectedFile:File = null;
  private item:Product = new Product();
  private kitid:any;

  constructor(
    private kService:ApiserviceService,
    private http: HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.kitid = JSON.parse(localStorage.getItem('kitchenid'));
    console.log()
  }
  
  onFileChanged(event) {
    if(event.target.files[0] != null) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(uForm:any) {
    this.item.ItemName = this.itemName;
    this.item.Price = this.Price;
    this.item.ItemDescription = this.Description;
    this.item.ItemCategory = this.Category;
    //this.item.ImagePath = this.ImgPath;
    this.item.ImagePath = '/assets/img/upload.png'
    let promise = this.kService.addProduct(this.item, this.kitid).toPromise();
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
