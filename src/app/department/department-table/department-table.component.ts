import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  studentdata = [];


  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.studentdata = this.departmentService.getDepartmentInfo();
    console.log(this.studentdata);

  }

  deleteFunction(i) {
    this.departmentService.delDepartment(i);
  }

  editFunction(i, item) {
    console.log("index:", i, item);
    this.router.navigate(['department/form/' + i]);
  }

}
