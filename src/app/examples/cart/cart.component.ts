import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { ProductService } from '../../services/product.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
<<<<<<< HEAD
		this.activatedRoute.params.subscribe(params => {
			var id = params['_id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product._id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
=======
		let addedProd = JSON.parse(localStorage.getItem('currItem'))
		console.log('found product: ' + JSON.stringify(addedProd))
		if(!addedProd._id) {
			this.loadCart();
			return;
		}
		this.items = JSON.parse(localStorage.getItem('cart'));
		if(!this.items){
			this.items = [];
		}
		this.addedItem.product = addedProd;
		this.addedItem.quantity = 1;
		let newItem:Boolean = true;
		for (var i = 0; i < this.items.length; i++) {
			if(this.items[i].product._id == this.addedItem.product._id) {
				this.items[i].quantity += 1
				newItem = false;
>>>>>>> ba7c65ed36d61fd726dd033dd7e30ddb95356779
			}
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

	exportAsPDF(divId)
    {
        let data = document.getElementById('divId');  
        html2canvas(data).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
        // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
        pdf.save('Receipt.pdf');
      }); 
    }
}

