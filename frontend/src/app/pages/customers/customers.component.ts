import { Component, OnInit } from '@angular/core';
import Customer from "../../../models/Customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['companyName', 'contactName', 'city', 'country', 'button'];

  dataSource: Customer[] = [{customerId: 'id', companyName: 'name', contactName: 'con', city: 'city', country: 'c'}];

  constructor() { }

  ngOnInit(): void {
  }

}
