import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsermasterComponent } from './usermaster.component';

const routes: Routes = [
  {
    path:"createuser/:action",
    component:CreateuserComponent
  },
  {
    path:"userdetails/:id",
    component:UserdetailsComponent
  },
  {
    path:"",
    component:UsermasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermasterRoutingModule { }
