import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CarComponent } from './car/car.component';
import { CarpartComponent } from './carpart/carpart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reg',
    component: RegistrationComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'carpart',
    component: CarpartComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
