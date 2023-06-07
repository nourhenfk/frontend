import { ListDepartmentsComponent } from './department/liste-departments/liste-departments.component';



import { UpdateMissionComponent } from './missions/update-mission/update-mission.component';
import { ListeMissionsComponent } from './missions/liste-missions/liste-missions.component';
import { CreateMissionComponent } from './missions/create-mission/create-mission.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { ListeEmployeeComponent } from './employee/liste-employee/liste-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ButtonModule, FormModule, GridModule, TableModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { UpdateFormateurComponent } from './formateurExterne/update-formateur/update-formateur.component';
import { CreateFormateurComponent } from './formateurExterne/create-formateur/create-formateur.component';
import { ListeFormateursComponent } from './formateurExterne/liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from './formations/liste-formations/liste-formations.component';
import { CreateFormationComponent } from './formations/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formations/update-formation/update-formation.component';
import { CreateAnnouncementComponent } from './announcements/create-announcement/create-announcement.component';
import { UpdateAnnouncementComponent } from './announcements/update-announcement/update-announcement.component';
import { ListeAnnouncementsComponent } from './announcements/liste-announcements/liste-announcements.component';
import { PointageComponent } from './pointage/pointage.component';
import { LeaveRequestFormComponent } from './leaveRequest/leave-request-form/leave-request-form.component';
import { UpdateleaveRequestComponent } from './leaveRequest/updateleave-request/updateleave-request.component';
import { ListeRequestsComponent } from './leaveRequest/liste-requests/liste-requests.component';
import { DetailRequestComponent } from './leaveRequest/detail-request/detail-request.component';
import { CreateTeamComponent } from './team/create-team/create-team.component';
import { UpdateTeamComponent } from './team/update-team/update-team.component';
import { ListeTeamsComponent } from './team/liste-teams/liste-teams.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';

import { ListePointagesComponent } from './pointage/liste-pointages/liste-pointages.component';
import { MonPointageComponent } from './pointage/mon-pointage/mon-pointage.component';
import { MyTeamComponent } from './team/my-team/my-team.component';






@NgModule({
  declarations: [
    ListeEmployeeComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    CreateMissionComponent,
    ListeMissionsComponent,
    UpdateMissionComponent,
    UpdateFormateurComponent,
    CreateFormateurComponent,
    ListeFormateursComponent,
    ListeFormationsComponent,
    CreateFormationComponent,
    UpdateFormationComponent,
    CreateAnnouncementComponent,
    UpdateAnnouncementComponent,
    ListeAnnouncementsComponent,
    PointageComponent,
    LeaveRequestFormComponent,
    UpdateleaveRequestComponent,
    ListeRequestsComponent,
    DetailRequestComponent,

    CreateTeamComponent,
    UpdateTeamComponent,
    ListeTeamsComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    ListDepartmentsComponent,

    ListePointagesComponent,
    MonPointageComponent,
    MyTeamComponent



  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    GridModule,
    FormModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgxFileDropModule,
    ReactiveFormsModule,

  ]
})
export class ManagerModule { }
