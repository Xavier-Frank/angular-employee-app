import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "./employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployeeData():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }

}
