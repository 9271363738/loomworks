import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"dashboard", loadChildren:()=> import ("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:"itemmaster", loadChildren:()=> import ("./itemmaster/itemmaster.module").then(m=>m.ItemmasterModule)
  },
  {
    path:"orders", loadChildren:()=> import ("./orders/orders.module").then(m=>m.OrdersModule)
  },
  {
    path:"usermaster", loadChildren:()=> import ("./usermaster/usermaster.module").then(m=>m.UsermasterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
