import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {

  itemName:String;
  Price:Number;
  Description:String;
  ImgPath:String;
  Category:Number;
  selectedFile:File;

  constructor() { }

  ngOnInit(): void {

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
