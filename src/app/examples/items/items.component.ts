import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../../models/kitchen';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  private kitchen = new Kitchen();
  currUserName:String = JSON.parse(localStorage.getItem('currUserName'));
  constructor(
    private kService:ApiserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  
}
