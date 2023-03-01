import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  //get form elements


  registrationForm = this.formBuilder.group({
    username : [''],
    email : [''],
    password : [''],
    confirmPassword : ['']
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  loadLoginPage() {
    this.router.navigate(['/login']);
  }
}
