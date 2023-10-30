import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
list1:any=[]
routesData:any = [];
finalamount:any;
finalsamount:any;
shippingcharge:number=0
TotalAmount:any=0;
subtotal:any = 0;
  constructor(private api:ApiService ,public route:Router,public routes:ActivatedRoute,public authS:AuthenticationService) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe((data:any)=> {
      console.log(data);
      this.routesData = JSON.parse(data.data);
      this.fun1()
      console.log(this.routesData)

    })
   this.api.gatAllOrders({}).subscribe((cdata:any)=>{
    this.list1=cdata
    console.log(this.list1)

   })
  
  }

  // Craeted Order
  next(){
    let items:any = [];
    console.log(this.routesData)
    this.routesData.finalData.forEach((element:any,index:any) => {
      items.push({item:element._id,price:element.updatePrice,size:element.sizes,gst:element.gstAmount,total:element.totalAmount})
      if((this.routesData.finalData.length - 1) == index){
        const data=JSON.stringify({
          date:this.routesData.date,
          poDate:this.routesData.poDate,
          customerNo:this.routesData.customerNo,
          poNo:this.routesData.poNo,
          category:this.routesData.category,
          items:items,
          totalAmount:this.subtotal,
          shippingCharges:this.shippingcharge,
          finalAmount:this.TotalAmount,
          user:this.authS.currentUserValue._id
        })
        console.log(data);
        this.api.createOrders(data).subscribe((cData:any)=>{
          this.route.navigate(['/user/order'])
        })
      }
    });
   
   
  }

   fun1(){
    for(let a=0;a<this.routesData.finalData.length;a++){
      this.subtotal += this.routesData.finalData[a].totalAmount;
      if((this.routesData.finalData.length - 1) == a){
        this.TotalAmount = (this.subtotal*1) + (this.shippingcharge*1);
      }
    }
   }


   myfun1(event:any){
    this.TotalAmount = (this.subtotal*1) + (event.target.value*1);
   }


  }

