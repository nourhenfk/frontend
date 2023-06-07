import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PointageComponent } from './pointage/pointage.component';
import { MissionsComponent } from './missions/missions.component';
import { FormationsComponent } from './formations/formations.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'pointage', component:  PointageComponent},
  { path: 'missions', component:  MissionsComponent},
  { path: 'formations', component:  FormationsComponent},
  { path: 'announcements', component:  AnnouncementsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
