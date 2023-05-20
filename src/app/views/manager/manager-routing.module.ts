import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateFormateurComponent } from './formateurExterne/create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './formateurExterne/update-formateur/update-formateur.component';
import { ListeFormateursComponent } from './formateurExterne/liste-formateurs/liste-formateurs.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ListeEmployeeComponent } from './employee/liste-employee/liste-employee.component';
import { CreateAnnouncementComponent } from './announcements/create-announcement/create-announcement.component';
import { UpdateAnnouncementComponent } from './announcements/update-announcement/update-announcement.component';
import { ListeAnnouncementsComponent } from './announcements/liste-announcements/liste-announcements.component';
import { PointageComponent } from './pointage/pointage.component';
import { CreateMissionComponent } from './missions/create-mission/create-mission.component';
import { UpdateManagerComponent } from '../admin/update-manager/update-manager.component';
import { UpdateMissionComponent } from './missions/update-mission/update-mission.component';
import { ListeMissionsComponent } from './missions/liste-missions/liste-missions.component';
import { CreateFormationComponent } from './formations/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formations/update-formation/update-formation.component';
import { ListeFormationsComponent } from './formations/liste-formations/liste-formations.component';

const routes: Routes = [
  { path: 'createEmployee', component:  CreateEmployeeComponent},
  { path: 'updateEmployee/:id', component:  UpdateEmployeeComponent},
  { path: 'employees', component:  ListeEmployeeComponent},
  { path: 'createFormation', component:  CreateFormationComponent},
  { path: 'updateFormation/:id', component:  UpdateFormationComponent},
  { path: 'formations', component:  ListeFormationsComponent},
  { path: 'createMission', component:  CreateMissionComponent},
  { path: 'updateMission/:id', component:  UpdateMissionComponent},
  { path: 'missions', component:  ListeMissionsComponent},
  { path: 'pointage', component:  PointageComponent},
  { path: 'createFormateur', component:  CreateFormateurComponent},
  { path: 'updateFormateur/:id', component:  UpdateFormateurComponent},
  { path: 'formateurs', component:  ListeFormateursComponent},
  { path: 'createAnnouncement', component: CreateAnnouncementComponent },
  { path: 'updateAnnouncement/:id', component:  UpdateAnnouncementComponent},
  { path: 'announcements', component:  ListeAnnouncementsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
