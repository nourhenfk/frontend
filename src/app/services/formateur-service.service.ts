import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormateurExterne } from '../models/formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/auth/formateurEx';

  constructor(private http: HttpClient) { }

  getAllFormateurs(): Observable<FormateurExterne[]> {
    return this.http.get<FormateurExterne[]>(`${this.apiUrl}/AllFormateurs`);
  }

  getFormateurById(id: number): Observable<FormateurExterne> {
    return this.http.get<FormateurExterne>(`${this.apiUrl}/getFormateurById/${id}`);
  }

  addFormateur(formateur: FormateurExterne): Observable<FormateurExterne> {
    return this.http.post<FormateurExterne>(`${this.apiUrl}/addFormateur`, formateur);
  }

  updateFormateur(id: number, formateur: FormateurExterne): Observable<FormateurExterne> {
    return this.http.put<FormateurExterne>(`${this.apiUrl}/updateFormateur/${id}`, formateur);
  }

  deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteFormateur/${id}`);
  }
  
}
