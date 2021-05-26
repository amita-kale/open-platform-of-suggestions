import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentideaService {
  ideas = [
    {
      title: 'idea Under Evaluation 1',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Under Evaluation',
    },
    {
      title: 'idea Under Evaluation 2',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Under Evaluation',
    },
    {
      title: 'idea Accepted for Implementation',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Accepted for Implementation',
    },
    {
      title: 'idea Idea Already Exist',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Idea Already Exist',
    },
    {
      title: 'idea Implemented 1',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Implemented',
    },
    {
      title: 'idea Implemented 2',
      description: '',
      benefits: '',
      department: '',
      createdon: null,
      authorname: 'Aniket kale',
      status: 'Implemented',
    },
  ];

  constructor() {}

  addidea(studentidea) {
    this.ideas.push(studentidea);
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
