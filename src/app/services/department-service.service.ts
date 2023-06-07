import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/auth/departments';

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    const url = `${this.apiUrl}/getAllDepartments`;
    return this.http.get<Department[]>(url);
  }

  getDepartmentById(id: number): Observable<Department> {
    const url = `${this.apiUrl}/getDepartmentById/${id}`;
    return this.http.get<Department>(url);
  }

  createDepartment(department: Department): Observable<Department> {
    const url = `${this.apiUrl}/createDepartment`;
    return this.http.post<Department>(url, department);
  }

  updateDepartment(id: number, updatedDepartment: Department): Observable<Department> {
    const url = `${this.apiUrl}/updateDepartment/${id}`;
    return this.http.put<Department>(url, updatedDepartment);
  }

  deleteDepartment(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteDepartment/${id}`;
    return this.http.delete<void>(url);
  }
}
