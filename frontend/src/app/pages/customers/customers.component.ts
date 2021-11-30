import { Component, OnInit } from '@angular/core';
import Customer from "../../../models/Customer";
import {NorthwindService} from "../../services/northwind.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['companyName', 'contactName', 'city', 'country', 'button'];

  constructor(public service: NorthwindService) { }

  ngOnInit(): void {
    this.service.loadCustomers();
  }

}
