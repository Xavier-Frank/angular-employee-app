import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: "register", component: RegistrationComponent},
  {path: "login", component:LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  // {path:"**", component:PageNotFoundComponent,
  //   children: [
  //     {path:"dashboard", component:DashboardComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegistrationComponent, LoginComponent];
