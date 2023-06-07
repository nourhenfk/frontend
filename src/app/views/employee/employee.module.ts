import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { PointageComponent } from './pointage/pointage.component';
import { HomeComponent } from './home/home.component';
import { MissionsComponent } from './missions/missions.component';
import { FormationsComponent } from './formations/formations.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [
    PointageComponent,
    HomeComponent,
    MissionsComponent,
    FormationsComponent,
    AnnouncementsComponent,

    LeaveRequestComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
