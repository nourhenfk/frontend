import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PointageComponent } from './pointage/pointage.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'pointage', component:  PointageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
