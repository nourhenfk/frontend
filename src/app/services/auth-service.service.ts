import {JwtHelperService} from '@auth0/angular-jwt'
import { AuthResponse } from './../auth-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { EmployeeService } from './employee-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private router :Router,
    private employeeService: EmployeeService) { }

  register(user: User): Observable<any> {
    const url = `${this.baseUrl}/api/v1/auth/register`;
    return this.http.post(url, user);
  }

  authenticate(user: User): Observable<any> {
    const url = `${this.baseUrl}/api/v1/auth/authenticate`;
    return this.http.post<AuthResponse>(url, {email:user.email,password:user.password})
      .pipe(
        tap(res => {
          const token = res.token;
          if (token) {
            localStorage.setItem('access_token', token);
          }
        })
      );
  }

  logout(): void {
    const url = `${this.baseUrl}/api/v1/auth/logout`;
    console.log('Logging out');
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);

  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return token ? true : false;
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  getAuthorizationToken(): string {
    const token = localStorage.getItem('access_token');
    return `Bearer ${token}`;
  }

  isManager(): boolean {
    const decoder = new JwtHelperService();
    try {
      return decoder.decodeToken(this.getAuthorizationToken()).role === 'MANAGER';
    } catch (error) {
      return false;
    }
  }

  isAdmin(): boolean {
    const decoder = new JwtHelperService();
    try {
      return decoder.decodeToken(this.getAuthorizationToken()).role === 'ADMIN';
    } catch (error) {
      return false;
    }
  }
  isEmployee(): boolean {
    const decoder = new JwtHelperService();
    try {
      return decoder.decodeToken(this.getAuthorizationToken()).role === 'Employee';
    } catch (error) {
      return false;
    }
  }
  getUserId(): number | undefined {
    const decoder = new JwtHelperService();
    try {
      return decoder.decodeToken(this.getAuthorizationToken()).id;
    } catch (error) {
      console.error('Error decoding authentication token:', error);
      return undefined;
    }
  }
  getEmployeeId(): number | undefined {
    const decoder = new JwtHelperService();
    try {
      return decoder.decodeToken(this.getAuthorizationToken()).id;
    } catch (error) {
      console.error('Error decoding authentication token:', error);
      return undefined;
    }
  }

}
