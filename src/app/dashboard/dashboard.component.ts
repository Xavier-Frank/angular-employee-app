import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public employeeData: any = [];
  constructor(private router: Router, private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this._employeeService.getEmployeeData()
      .subscribe(data => this.employeeData = data);
  }

}
