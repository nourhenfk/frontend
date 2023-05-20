import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/auth/employ/';

  constructor(private httpClient :HttpClient) { }

  getAllEmployee():Observable <Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl+'listEmployee'}`);


  }
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl+'addEmployee'}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}getById/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}updateEmployee/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}deleteEmployee/${id}`)
  }
}
