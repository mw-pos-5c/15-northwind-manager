import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {OrdersComponent} from "./pages/orders/orders.component";
import {OrderDetailsComponent} from "./pages/order-details/order-details.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AngularMaterialModule,
    MatTableModule
  ]
})
export class OrdersModule { }
