import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/teams';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    const url = `${this.apiUrl}/getAllTeams`;
    return this.http.get<Team[]>(url);
  }

  getTeamById(id: number): Observable<Team> {
    const url = `${this.apiUrl}/getTeamById/${id}`;
    return this.http.get<Team>(url);
  }

  createTeam(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/createTeam`;
    return this.http.post<Team>(url, team);
  }

  updateTeam(id: number, updatedTeam: Team): Observable<Team> {
    const url = `${this.apiUrl}/updateTeam/${id}`;
    return this.http.put<Team>(url, updatedTeam);
  }

  deleteTeam(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteTeam/${id}`;
    return this.http.delete<void>(url);
  }
  getTeamOfAuthenticatedUser(): Observable<Team> {
    const url = `${this.apiUrl}/getTeamOfAuthenticatedUser`;
    return this.http.get<Team>(url);
  }
}
