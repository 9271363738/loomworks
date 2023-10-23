import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"order", loadChildren:()=> import ("./order/order.module").then(m=>m.OrderModule)
  },
  {
    path:"dashboard", loadChildren:()=> import ("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
