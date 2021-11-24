import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./pages/customers/customers.component";
import {EmployeesComponent} from "./pages/employees/employees.component";

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(x => x.OrdersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
