import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private api:ApiService,public route:ActivatedRoute) { }
list:any=[]
itemlist:any=[]
itemid:any;
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.itemid=res.id
      console.log(this.itemid)
    this.api.gatAllOrders({_id:this.itemid}).subscribe((cdata:any)=>{
      this.list=cdata.orders[0]
      console.log(this.list)
    })
    this.api.getAllDealers({}).subscribe((cdata:any)=>{
      this.itemlist=cdata.data
      console.log(this.itemlist)
    })
  })
  }

}
