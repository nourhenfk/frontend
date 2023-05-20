import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mood } from '../models/mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  private API_URL = 'http://localhost:8080/api/v1/auth/moods';

  constructor(private http: HttpClient) { }

  getAllMoods(): Observable<Mood[]> {
    return this.http.get<Mood[]>(this.API_URL);
  }

  saveMood(mood: Mood): Observable<Mood> {
    return this.http.post<Mood>(this.API_URL, mood);
  }
}
