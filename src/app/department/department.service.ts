import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departmentinfo = [];

  // constructor() { }

  // addDepartmentData(department) {
  //   this.departmentinfo.push(department);
  // }
  // getDepartmentInfo() {
  //   return this.departmentinfo;
  // }
  // delDepartment(i) {
  //   this.departmentinfo.splice(i, 1);
  // }
  // updateStudent(index, student) {
  //   this.departmentinfo[index] = student;

  // }
  // getSpecificStudentByIndex(index) {
  //   return this.departmentinfo[index];
  // }
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('http://localhost:3000/departments');
  }

  addData(department) {
    console.log(department);

    return this.httpClient.post(
      'http://localhost:3000/departments/',
      department
    );
  }

  updateData(id, item) {
    return this.httpClient.put('http://localhost:3000/departments/' + id, item);
  }

  deleteData(id) {
    return this.httpClient.delete('http://localhost:3000/departments/' + id);
  }
  getDepartmentName(id) {
    return this.httpClient.get('http://localhost:3000/departments/' + id);
  }
}
