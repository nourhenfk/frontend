import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user';
import { TeamService } from 'src/app/services/team-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-liste-teams',
  templateUrl: './liste-teams.component.html',
  styleUrls: ['./liste-teams.component.scss']
})
export class ListeTeamsComponent implements OnInit {
  teams: Team[] = [];
  users: { [teamId: number]: User[] } = {};

  constructor(private teamService: TeamService, private userService: UserServiceService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getAllTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      this.fetchUsersForTeams(teams);
    });
  }

  fetchUsersForTeams(teams: Team[]): void {
    teams.forEach((team: Team) => {
      this.userService.getUsersByTeam(team.id).subscribe((users: User[]) => {
        this.users[team.id] = users;
      });
    });
  }


  deleteTeam(teamId: number): void {
    if (confirm('Are you sure you want to delete this team?')) {
      this.teamService.deleteTeam(teamId).subscribe(() => {
        this.teams = this.teams.filter((team: Team) => team.id !== teamId);
        delete this.users[teamId];
      });
    }
  }

}
