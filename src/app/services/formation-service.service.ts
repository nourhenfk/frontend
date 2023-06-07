import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/auth/formations';

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.apiUrl}/AllFormations`);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/getFormationById/${id}`);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(`${this.apiUrl}/addFormation`, formation);
  }

  updateFormation(id: number, formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(`${this.apiUrl}/updateFormation/${id}`, formation);
  }

  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteFormation/${id}`);
  }

  uploadDocuments(formationId: number, documents: File[]): Observable<void> {
    const formData: FormData = new FormData();
    for (let i = 0; i < documents.length; i++) {
      formData.append('documents', documents[i]);
    }

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<void>(`${this.apiUrl}/${formationId}/documents`, formData, { headers: headers });
  }
}
