import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private httpClient: HttpClient) {}

  getIdea() {
    return this.httpClient.get('http://localhost:3000/ideas');
  }
  getIdeaById(id) {
    return this.httpClient.get('http://localhost:3000/ideas' + id); //+id is write hear bcoz it give all info about this idea of id
  }
}
