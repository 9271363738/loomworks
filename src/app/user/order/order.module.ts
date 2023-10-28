import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    NgbNavModule,
    NgSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
