import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  private baseUrl="http://localhost:8080/api/v1/auth/";

  constructor(private httpClient :HttpClient) { }

  getManagerList():Observable <Manager[]>{
    return this.httpClient.get<Manager[]>(`${this.baseUrl+'listManager'}`);


  }
  createManager(manager: Manager): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl+'addManager'}`,manager);
  }

  getManagerById(id: number): Observable<Manager> {
    return this.httpClient.get<Manager>(`${this.baseUrl}getById/${id}`);
  }

  updateManager(id: number, manager: Manager): Observable<Manager> {
    return this.httpClient.put<Manager>(`${this.baseUrl}updateManager/${id}`, manager);
  }
  deleteManager(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}deleteManager/${id}`)
  }
}
