import { Component, OnInit } from '@angular/core';
import Employee from "../../../../../models/Employee";
import Order from "../../../../../models/Order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  displayedColumns: string[] = ['orderDate', 'requiredDate', 'shippedDate', 'nrOrderDetails', 'button'];

  dataSource: Order[] = [{id: 42, orderDate: new Date(), requiredDate: new Date(), shippedDate: new Date(), nrOrderDetails: 42}];

  constructor() { }

  ngOnInit(): void {
  }

}
