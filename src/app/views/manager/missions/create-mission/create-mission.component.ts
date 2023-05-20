import { MissionService } from './../../../../services/mission-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Mission } from 'src/app/models/mission.model';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent {
  mission: Mission = new Mission(0, "", "", new Date(), new Date(), 0, 0, "", );


  constructor(private MissionService :MissionService,
   private router :Router) {}
   onSubmit(): void {
     this.MissionService.addMission(this.mission)
       .subscribe(() => {
         console.log('mission added successfully');
         this.router.navigate(['/manager/missions']);
       });
   }
}
