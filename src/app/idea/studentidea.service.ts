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

  updateStudent(index, student) {
    this.ideas[index] = student;

  }
  getSpecificStudentByIndex(index) {
    return this.ideas[index];
  }

  delStudents(i) {
    this.ideas.splice(i, 1);
  }
}
