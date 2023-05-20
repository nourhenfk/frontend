import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.scss']
})
export class UpdateMissionComponent {
  mission: Mission = new Mission(0, "", "", new Date(), new Date(), 0, 0, "", );

  constructor(private MissionService :MissionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.MissionService.getMissionById(id).subscribe((mission) => {
      this.mission = mission;
    });
  }

  onSubmit(): void {
    this.MissionService.updateMission(this.mission.id, this.mission)
      .subscribe(() => {
        console.log('mission updated successfully');
        this.router.navigate(['/manager/missions']);
      });
  }
}
