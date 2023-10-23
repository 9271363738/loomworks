import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemmasterRoutingModule } from './itemmaster-routing.module';
import { ItemmasterComponent } from './itemmaster.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { DetailsItemComponent } from './details-item/details-item.component';


@NgModule({
  declarations: [
    ItemmasterComponent,
    CreateItemComponent,
    DetailsItemComponent
  ],
  imports: [
    CommonModule,
    ItemmasterRoutingModule
  ]
})
export class ItemmasterModule { }
