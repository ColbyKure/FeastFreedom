import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

	private items: Array<Item>;
	private total: number = 0;
	private addedItem:Item = new Item();

	constructor(
		private activatedRoute: ActivatedRoute,
		private service: ApiserviceService
	) { }

	ngOnInit() {
		let addedProd = JSON.parse(localStorage.getItem('currItem'))
		console.log('found product: ' + JSON.stringify(addedProd))
		if(!addedProd._id) {
			this.loadCart();
			return;
		}
		this.items = JSON.parse(localStorage.getItem('cart'));
		this.addedItem.product = addedProd;
		this.addedItem.quantity = 1;
		let newItem:Boolean = true;
		for (var i = 0; i < this.items.length; i++) {
			if(this.items[i].product._id == this.addedItem.product._id) {
				this.items[i].quantity += 1
				newItem = false;
			}
		}
		if(!this.items){
			this.items = [];
		}
		console.log('found item: ' + JSON.stringify(this.addedItem))
		if(newItem) {
			this.items.push(this.addedItem);
		}
		localStorage.setItem('cart', JSON.stringify(this.items))
		this.loadCart();
	}

	loadCart(): void {
		this.total = 0;
		for (var i = 0; i < this.items.length; i++) {
			let item_i = this.items[i];
			let addedPrice:number = item_i.quantity * Number(item_i.product.Price);
			this.total += addedPrice;
		}
	}

	remove(id: string): void {
		let index: number = -1;
		for (var i = 0; i < this.items.length; i++) {
			let item: Item = this.items[i];
			if(item.product._id == id) {
				this.items.splice(i, 1);
				localStorage.setItem('cart', JSON.stringify(this.items))
				break;
			}
		}
		this.loadCart();
	}
}

