import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path:"create-order",
    component:CreateOrderComponent
  },
   {
    path:"order-details",
    component:OrderDetailsComponent
  } ,
  {
    path:"",
    component:OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
