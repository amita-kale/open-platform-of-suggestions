import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  department = {
    name: '',
    head: ''
  }


  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
  }

  submitClicked() {
    const department = {
      name: this.department.name,
      head: this.department.head
    }
    console.log("submit clicked");
    this.departmentService.addDepartmentData(department);
    this.router.navigate(['/department/table']);
  }

}
