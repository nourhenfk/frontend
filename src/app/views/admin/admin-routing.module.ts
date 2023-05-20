import { RegistrationReqestsComponent } from './registration-reqests/registration-reqests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/auth-guard.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { DetailsManagerComponent } from './details-manager/details-manager.component';
import { ListeEmployeeComponent } from './liste-employee/liste-employee.component';
import { ListeManagerComponent } from './liste-manager/liste-manager.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateManagerComponent } from './update-manager/update-manager.component';

const routes: Routes = [
  { path: 'managers', component: ListeManagerComponent },
  { path: 'employees', component: ListeEmployeeComponent},
  {path:'CreateManager', component: CreateManagerComponent},
  {path :'registre-requests' ,component:RegistrationReqestsComponent},
  {path:'UpdateManager/:id', component: UpdateManagerComponent},
  {path:'UpdateEmployee/:id', component: UpdateEmployeeComponent},
  {path:'DetailsManager/:id', component: DetailsManagerComponent },
  {path:'DetailsEmployee/:id', component: DetailsEmployeeComponent },
  {path :'CreateEmployee',component:CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
