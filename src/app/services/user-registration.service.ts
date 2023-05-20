import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationRequest } from '../models/user-registration-request';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  getPendingRegistrationRequests(): Observable<UserRegistrationRequest[]> {
    const url = `${this.baseUrl}/pending-requests`;
    return this.http.get<UserRegistrationRequest[]>(url);
  }

  getAllRequests(): Observable<UserRegistrationRequest[]> {
    const url = `${this.baseUrl}/all-requests`;
    return this.http.get<UserRegistrationRequest[]>(url);
  }

  approveRegistrationRequest(requestId: number): Observable<any> {
    const url = `${this.baseUrl}/approve/${requestId}`;
    return this.http.post(url, {});
  }

  rejectRegistrationRequest(requestId: number): Observable<any> {
    const url = `${this.baseUrl}/reject/${requestId}`;
    return this.http.post(url, {});
  }
}
