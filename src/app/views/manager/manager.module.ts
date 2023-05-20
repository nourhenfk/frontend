import { UpdateMissionComponent } from './missions/update-mission/update-mission.component';
import { ListeMissionsComponent } from './missions/liste-missions/liste-missions.component';
import { CreateMissionComponent } from './missions/create-mission/create-mission.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
   

  ]
})
export class ManagerModule { }
