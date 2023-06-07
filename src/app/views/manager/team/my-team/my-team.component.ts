import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  team: Team | null = null;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeamOfAuthenticatedUser();
  }

  getTeamOfAuthenticatedUser(): void {
    this.teamService.getTeamOfAuthenticatedUser()
      .subscribe(
        (team: Team) => {
          this.team = team;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
