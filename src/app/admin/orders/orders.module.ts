import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    NgbAccordionModule
  ]
})
export class OrdersModule { }
