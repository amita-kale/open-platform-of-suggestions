import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentinfo = [];

  constructor() { }

  addDepartmentData(department) {
    this.departmentinfo.push(department);
  }
  getDepartmentInfo() {
    return this.departmentinfo;
  }

}
