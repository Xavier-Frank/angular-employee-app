import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { IEmployee } from '../employee';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables
  public email: string = "";
  public password: any = "";
  public successMsg: string = "";
  public errorMsg: string = "";
  public employeeData: any = [];


  constructor(private router: Router, private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this._employeeService.getEmployeeData()
      .subscribe(data => this.employeeData = data);
  }
  loadRegistrationPage() {
    this.router.navigate(['/register']);
  }

  loginEmployee() {
    this.successMsg, this.errorMsg = "";

    this.employeeData
      .forEach((item: { email: string; password: any; }) => {
        if (this.email === item.email && this.password === item.password){
          this.successMsg = "Success";
          alert(this.successMsg);
          return this.router.navigate(['/dashboard']);
        }else {
          return this.errorMsg = "Incorrect email or password";
        }
      })
    }
}
