import { Component, OnInit } from '@angular/core';
import Employee from "../../../models/Employee";
import {NorthwindService} from "../../services/northwind.service";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'city', 'country', 'button'];

  constructor(public service: NorthwindService) { }

  ngOnInit(): void {
    this.service.loadEmployees();
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.service.employees = [...this.service.employees.sort((a, b) => {
      return this.compare(a.name, b.name, sort.direction === 'asc')
    })];
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
