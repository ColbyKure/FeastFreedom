import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { Kitchen } from '../../models/kitchen';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  toDelete:Product;

  constructor(
    private kService:ApiserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.toDelete = JSON.parse(localStorage.getItem('currItem'));
  }

  confirmDelete() {
    let promise = this.kService.deleteProduct(this.toDelete._id).toPromise();
    promise.then((data) => {
      this.router.navigate(['/products']);
      location.reload();
    }).catch((error) => {
      console.log('there was an error on delete' + error)
    });
}

  cancelDelete() {
    this.router.navigate(['/products']);
  }
}
