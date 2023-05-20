import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'app-liste-missions',
  templateUrl: './liste-missions.component.html',
  styleUrls: ['./liste-missions.component.scss']
})
export class ListeMissionsComponent {
  ListMissions: Mission[] = [];

  constructor(private MissionService :MissionService,
   private router : Router) { }
   ngOnInit(): void {

this.getMissionList();
  }
private getMissionList(){
  this.MissionService.getAllMissions().subscribe(data => {this.ListMissions = data;
  });
}
updateMission(id:number){
this.router.navigate(['manager/updateMission',id]);
}
deleteMission(id:number){
  this.MissionService.deleteMission(id).subscribe(data =>{
    console.log(data);
this.getMissionList();
  });
  }

 
}
