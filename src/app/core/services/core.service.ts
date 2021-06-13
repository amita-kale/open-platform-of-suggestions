import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
    return this.httpClient.get('http://localhost:3000/statuses/');
  }

  getDepartments() {
    return this.httpClient.get('http://localhost:3000/departments/');
  }

  getIdeas() {
    return this.httpClient.get('http://localhost:3000/ideas/');
  }

}
