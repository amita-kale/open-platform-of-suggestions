import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  postUser(user) {
    return this.httpClient.post('http://localhost:3000/user', user);
  }
  getUsers() {
    return this.httpClient.get('http://localhost:3000/user');
  }
  getAdminDetails() {
    return this.httpClient.get('http://localhost:3000/admin');
  }
}
