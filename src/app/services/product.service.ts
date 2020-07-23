import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 1, Name: "Pineapple Fried Rice", Price: 12, 
            Description: "Shrimp, chicken, raisins, cashew nuts, broccoli, a touch of curry powder, dried shredded pork.",
            Photo:"assets/img/PineappleFriedRice.jpg", FoodCategory: "Thai"},
            { id: 2, Name: "Shrimp Tempura", Price: 8, 
            Description: "Shrimp or vegetable, sweet and sour dip.",
            Photo:"assets/img/ShrimpTempura.jpg", FoodCategory: "Asian"},
            { id: 3, Name: "Pineapple Fried Rice", Price: 12, 
            Description: "Shrimp, chicken, raisins, cashew nuts, broccoli, a touch of curry powder, dried shredded pork.",
            Photo:"assets/img/thai.jpg", FoodCategory: "Thai"}
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
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}