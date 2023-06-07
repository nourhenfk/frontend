import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pointage } from '../models/pointage.model';
import { User } from '../models/user';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PointageServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/auth/pointages';
  headers: HttpHeaders
  constructor(private http: HttpClient,
              private authService: AuthServiceService) {
                const token = this.authService.getToken()
                this.headers = new HttpHeaders({
                  'Content-Type': 'application/json',
                  //'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`
                })
   }



  pointer(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pointer`, user, {headers: this.headers});
  }

  terminerPointage(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/terminer-pointage`, user, {headers: this.headers});
  }

  getTodayPointage() {
    return this.http.get<any>(`${this.baseUrl}/todayPointage`, {headers: this.headers})
   }

  getAllPointagesByUser(userId: number): Observable<Pointage[]> {
    return this.http.get<Pointage[]>(`${this.baseUrl}/getAllPointagesByUser/${userId}`, {headers: this.headers});
  }
  getAllPointages(): Observable<Pointage[]> {
    return this.http.get<Pointage[]>(`${this.baseUrl}/getAllPointages`, { headers: this.headers });
  }
}
