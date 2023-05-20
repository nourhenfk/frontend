import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { PointageComponent } from './pointage/pointage.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PointageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
