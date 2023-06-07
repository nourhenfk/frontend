import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { DetailsManagerComponent } from './details-manager/details-manager.component';
import { ListeManagerComponent } from './liste-manager/liste-manager.component';
import { UpdateManagerComponent } from './update-manager/update-manager.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListeEmployeeComponent } from './liste-employee/liste-employee.component';

import { RegistrationReqestsComponent } from './registration-reqests/registration-reqests.component';
import { GridModule, FormModule, TableModule, ButtonModule } from '@coreui/angular';


@NgModule({
  declarations: [
    CreateManagerComponent,
    DetailsManagerComponent,
    ListeManagerComponent,
    UpdateManagerComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ListeEmployeeComponent,
   
    RegistrationReqestsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GridModule,
    FormModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class AdminModule { }
