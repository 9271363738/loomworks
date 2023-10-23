import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermasterRoutingModule } from './usermaster-routing.module';
import { UsermasterComponent } from './usermaster.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    UsermasterComponent,
    CreateuserComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    UsermasterRoutingModule
  ]
})
export class UsermasterModule { }
