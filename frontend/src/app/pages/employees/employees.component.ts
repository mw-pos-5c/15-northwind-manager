import { Component, OnInit } from '@angular/core';
import Employee from "../../../models/Employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'city', 'country', 'button'];

  dataSource: Employee[] = [{id: 42, city: 'ccity', country:'ccounty', name: 'name'}];


  constructor() { }

  ngOnInit(): void {
  }

}
