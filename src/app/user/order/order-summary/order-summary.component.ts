import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
list1:any=[]
  constructor(private api:ApiService ,public route:Router,public routes:ActivatedRoute) { }

  ngOnInit(): void {
   this.api.gatAllOrders({}).subscribe((cdata:any)=>{
    this.list1=cdata
    console.log(this.list1)
   })}



  }

