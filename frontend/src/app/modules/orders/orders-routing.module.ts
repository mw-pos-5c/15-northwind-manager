import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderDetailsComponent} from "./pages/order-details/order-details.component";
import {OrdersComponent} from "./pages/orders/orders.component";

const routes: Routes = [
  {path: 'details/:id', component: OrderDetailsComponent},
  {path: ':id', component: OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
