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
	private products:Product[] = [];
	private kitid:any;

	currUserName:String = JSON.parse(localStorage.getItem('currUserName'));
  	constructor(
    	private kService:ApiserviceService,
    	private router:Router,
  	) { }

	ngOnInit() {
		if (!localStorage.getItem('foo')) { 
			localStorage.setItem('foo', 'no reload') 
			location.reload() 
		} else {
			localStorage.removeItem('foo') 
		}
		if (localStorage.getItem('errorLogin')){
			this.router.navigate(['/login']);
		}
		this.kitid = JSON.parse(localStorage.getItem('kitchenid'));
		let promise:any = this.kService.getKitchenByID(JSON.parse(localStorage.getItem('kitchenid'))).toPromise();
		// let hard_coded = "5f1a6e60382ae46cec07d291";
		// let promise:any = this.kService.getKitchenByID(hard_coded).toPromise();
    	promise.then((data) => {
			console.log(data);
			this.products = data.items;
			this.kitchen = data;
		}).catch((error) => {
			console.log('error when getting kitchen by id')
			console.log(error)
		});
	}

	isUser(){
		console.log('inside isUser, printing isKitchen from local storage');
		console.log(JSON.parse(localStorage.getItem('isKitchen')))
		if(JSON.parse(localStorage.getItem('isKitchen')) == false) {
			return true;
		}
		return false
	}
	isKitchen(){
		if(JSON.parse(localStorage.getItem('isKitchen')) == false) {
			return false;
		}
		return true;
    }

	addItem(){
		console.log('you pressed addItem');
		localStorage.setItem('kitchenid', JSON.stringify(this.kitid));
		this.router.navigate(['/createitem']);
	}
	editItem(item:any){
		localStorage.setItem('currItem', JSON.stringify(item));
		this.router.navigate(['/edit-item']);
	}
	deleteItem(item:any){
		localStorage.setItem('currItem', JSON.stringify(item));
		this.router.navigate(['/delete-item']);
	}

	addToCart(item:any){
		localStorage.setItem('currItem', JSON.stringify(item));
		this.router.navigate(['/cart']);
	}
}