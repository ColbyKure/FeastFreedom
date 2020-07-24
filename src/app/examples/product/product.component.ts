import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { Kitchen } from '../../models/kitchen';

@Component({
	templateUrl: 'product.component.html',
	styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

	private kitchen:Kitchen = new Kitchen();
	private products: Product[] = [];

	currUserName:String = JSON.parse(localStorage.getItem('currUserName'));
  	constructor(
    	private kService:ApiserviceService,
    	private router:Router,
  	) { }

	ngOnInit() {
		//let promise:any = this.kService.getKitchenByID(JSON.parse(localStorage.getItem('kitchenid'))).toPromise();
		let hard_coded = "5f1a6e60382ae46cec07d291";
		let promise:any = this.kService.getKitchenByID(hard_coded).toPromise();
    	promise.then((data) => {
			console.log(data);
			this.products = data.items;
			this.kitchen = data;
		}).catch((error) => {
			console.log('error when getting kitchen by id')
			console.log(error)
		});
	}

	


}