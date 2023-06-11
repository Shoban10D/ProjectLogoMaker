import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../shared/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {

  }
  baserUrl = environment.baseUrlAPI;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${environment.token}`
  })


  getChat() {
    return this.http.get('https://dummyjson.com/products');
  }

  postChat(data: any) {
    return this.http.post(this.baserUrl, data, { headers: this.headers });
  }
}
