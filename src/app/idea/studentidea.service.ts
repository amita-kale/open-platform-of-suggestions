import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentideaService {


  ideas = [];

  constructor() { }

  addidea(studentidea) {
    this.ideas.push(studentidea)
  }
  getStudents() {
    return this.ideas;
  }

}
