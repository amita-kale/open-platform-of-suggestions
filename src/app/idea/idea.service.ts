import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from '../shared/models/idea.model';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
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

  getDepartments() {
    return this.httpClient.get('http://localhost:3000/departments/');
  }

  getIdeas() {
    return this.httpClient.get('http://localhost:3000/ideas/');
  }

  getIdeaById(id: number) {
    return this.httpClient.get('http://localhost:3000/ideas/' + id);
  }

  createIdea(idea) {
    return this.httpClient.post('http://localhost:3000/ideas/', idea);
  }

  updateIdea(idea: Idea) {
    return this.httpClient.put('http://localhost:3000/ideas/' + idea.id, idea);
  }
}
