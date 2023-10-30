import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path:"create-order/:action",
    component:CreateOrderComponent
  },
   {
    path:"order-details/:id",
    component:OrderDetailsComponent
  } ,
  {
    path:"",
    component:OrderComponent
  },
  {
    path:"order-summary",
    component:OrderSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
