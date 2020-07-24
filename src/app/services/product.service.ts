import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { _id: 1, ItemName: "Pineapple Fried Rice", Price: 12, 
            ItemDescription: "Shrimp, chicken, raisins, cashew nuts, broccoli, a touch of curry powder, dried shredded pork.",
            ImagePath:"assets/img/PineappleFriedRice.jpg", ItemCategory: 1},
            { _id: 2, ItemName: "Shrimp Tempura", Price: 8, 
            ItemDescription: "Shrimp or vegetable, sweet and sour dip.",
            ImagePath:"assets/img/ShrimpTempura.jpg", ItemCategory: 2},
            { _id: 3, ItemName: "Pineapple Fried Rice", Price: 12, 
            ItemDescription: "Shrimp, chicken, raisins, cashew nuts, broccoli, a touch of curry powder, dried shredded pork.",
            ImagePath:"assets/img/thai.jpg", ItemCategory: 3}
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i]._id == id) {
                return i;
            }
        }
        return -1;
    }

}