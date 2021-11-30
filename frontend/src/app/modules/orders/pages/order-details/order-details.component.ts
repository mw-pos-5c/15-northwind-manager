import { Component, OnInit } from '@angular/core';
import Employee from "../../../../../models/Employee";
import OrderDetail from "../../../../../models/OrderDetail";
import {NorthwindService} from "../../../../services/northwind.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {


  displayedColumns: string[] = ['quantity', 'unitPrice', 'productName'];

  constructor(public service: NorthwindService, private route: ActivatedRoute, private router: Router) { }

  id = -1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = +(value.get("id") || 0);
      this.service.loadOrderDetails(this.id);
    })
  }

  add() {
    this.router.navigate(['/', 'orders', 'details', this.id + 1])
  }

  sub() {
    this.router.navigate(['/', 'orders', 'details', this.id - 1])
  }
}
