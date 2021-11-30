import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Employee from "../../models/Employee";
import Customer from "../../models/Customer";
import Order from "../../models/Order";
import OrderDetail from "../../models/OrderDetail";

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/Northwind/"

  employees: Employee[] = [];
  customers: Customer[] = [];

  orders: Order[] = [];
  orderDetails: OrderDetail[] = [];

  loadEmployees() {
    this.http.get<Employee[]>(this.url + "GetEmployees").subscribe(value => {
      this.employees = value;
    });
  }

  loadCustomers() {
    this.http.get<Customer[]>(this.url + "GetCustomers").subscribe(value => {
      this.customers = value;
    });
  }

  loadOrders(id: string) {
    this.http.get<Order[]>(this.url + "GetOrders?id="+id).subscribe(value => {
      this.orders = value;
      console.log(value);
    });
  }

  loadOrderDetails(id: number) {
    this.http.get<OrderDetail[]>(this.url + "GetOrderDetails?id="+id).subscribe(value => {
      this.orderDetails = value;
    });
  }
}
