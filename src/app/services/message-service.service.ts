import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/messages';

  constructor(private http: HttpClient) {}

  sendMessage(message: any, receiverId: number): Observable<Message> {
    const url = `${this.apiUrl}/sendMessage?receiverId=${receiverId}`;
    return this.http.post<Message>(url, message);
  }

  getMessagesByUser(): Observable<Message[]> {
    const url = `${this.apiUrl}/getMessage`;
    return this.http.get<Message[]>(url);
  }

  getConversation(userId: number): Observable<Message[]> {
    const url = `${this.apiUrl}/getConversation/${userId}`;
    return this.http.get<Message[]>(url);
  }
}
