import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave-request.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/leaverequests';

  constructor(private http: HttpClient) {}

  getAllLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl);
  }

  getLeaveRequestById(id: number): Observable<LeaveRequest> {
    const url = `${this.apiUrl}/getLeaveRequestById/${id}`;
    return this.http.get<LeaveRequest>(url);
  }

  createLeaveRequest(userId: number, leaveRequest: LeaveRequest, documents?: File[]): Observable<LeaveRequest> {
    const url = `${this.apiUrl}/addLeaveRequest?userId=${userId}`;
    const formData = new FormData();
    formData.append('leaveRequest', JSON.stringify(leaveRequest));
    if (documents) {
      for (let i = 0; i < documents.length; i++) {
        formData.append('documents', documents[i]);
      }
    }
    return this.http.post<LeaveRequest>(url, formData);
  }




  updateLeaveRequest(id: number, updatedLeaveRequest: LeaveRequest): Observable<LeaveRequest> {
    const url = `${this.apiUrl}/updateLeaveRequest/${id}`;
    return this.http.put<LeaveRequest>(url, updatedLeaveRequest);
  }

  deleteLeaveRequest(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteLeaveRequest/${id}`;
    return this.http.delete<void>(url);
  }

  approveLeaveRequest(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}/approve`;
    return this.http.post<void>(url, null);
  }

  rejectLeaveRequest(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}/reject`;
    return this.http.post<void>(url, null);
  }
  getLeaveRequestDetails(id: number): Observable<LeaveRequest> {
    const url = `${this.apiUrl}/getLeaveRequestDetails/${id}`;
    return this.http.get<LeaveRequest>(url);
  }
}
