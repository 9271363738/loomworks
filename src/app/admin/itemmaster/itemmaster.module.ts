import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemmasterRoutingModule } from './itemmaster-routing.module';
import { ItemmasterComponent } from './itemmaster.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { DetailsItemComponent } from './details-item/details-item.component';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ItemmasterComponent,
    CreateItemComponent,
    DetailsItemComponent
  ],
  imports: [
    CommonModule,
    ItemmasterRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class ItemmasterModule { }
