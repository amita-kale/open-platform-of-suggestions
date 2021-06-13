import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private httpClient: HttpClient) {}

  getStatuses() {
    return this.httpClient.get('http://localhost:3000/statuses/');
  }

  getRoles() {
    return this.httpClient.get('http://localhost:3000/roles/');
  }

  getUsers() {
    return this.httpClient.get('http://localhost:3000/users/');
  }

  getUser(id) {
    return this.httpClient.get('http://localhost:3000/users/' + id);
  }

  createUser(user: User) {
    return this.httpClient.post('http://localhost:3000/users/', user);
  }

  updateUser(user: User) {
    return this.httpClient.put('http://localhost:3000/users/' + user.id, user);
  }

  getDepartments() {
    return this.httpClient.get('http://localhost:3000/departments/');
  }

  getIdeas() {
    return this.httpClient.get('http://localhost:3000/ideas/');
  }
}
