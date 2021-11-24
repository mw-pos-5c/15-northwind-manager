import { Component, OnInit } from '@angular/core';
import Employee from "../../../../../models/Employee";
import OrderDetail from "../../../../../models/OrderDetail";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {


  displayedColumns: string[] = ['quantity', 'unitPrice', 'productName'];

  dataSource: OrderDetail[] = [{orderId: 42, unitPrice: 44, quantity: 45, productName: 'name'}];


  constructor() { }

  ngOnInit(): void {
  }

}
