import { Component, OnInit } from '@angular/core';
import Employee from "../../../../../models/Employee";
import Order from "../../../../../models/Order";
import {NorthwindService} from "../../../../services/northwind.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  displayedColumns: string[] = ['orderDate', 'requiredDate', 'shippedDate', 'nrOrderDetails', 'button'];

  constructor(public service: NorthwindService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const id = value.get("id") || '';
      this.service.loadOrders(id);
    })

  }

}
