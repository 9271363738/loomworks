import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { DetailsItemComponent } from './details-item/details-item.component';
import { ItemmasterComponent } from './itemmaster.component';

const routes: Routes = [
  {
    path:"create-item/:action",
    component:CreateItemComponent
  },
  {
    path:"details-item/:id",
    component:DetailsItemComponent
  },
  {
    path:"",
    component:ItemmasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemmasterRoutingModule { }
