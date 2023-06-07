import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Mission } from '../models/mission.model';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/auth/employ/';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}listEmployee`);
  }

  createEmployee(employee: any): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}addEmployee`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}getById/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}updateEmployee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}deleteEmployee/${id}`);
  }

  getAssignedMissions(employeeId: number): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${this.baseUrl}${employeeId}/assignedMissions`);
  }

  uploadPicture(employeeId: number, file: File): Observable<Employee> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const httpOptions = {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    };

    return this.httpClient.post<Employee>(
      `${this.baseUrl}${employeeId}/uploadPicture`,
      formData,
      httpOptions
    );
  }
}
