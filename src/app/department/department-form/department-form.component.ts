import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css'],
})
export class DepartmentFormComponent implements OnInit {
  isEdit = false;
  index = -1;
  department = {
    name: '',
    head: '',
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.id) {
      this.isEdit = true;
      const stud = this.departmentService.getSpecificStudentByIndex(
        this.routeParam.snapshot.params.id
      );

      this.department = {
        name: stud.name,
        head: stud.head,
      };
    }
  }

  submitClicked() {
    const department = {
      name: this.department.name,
      head: this.department.head,
    };

    if (this.isEdit == false) {
      this.departmentService.addDepartmentData(department);
    } else {
      this.departmentService.updateStudent(
        this.routeParam.snapshot.params.id,
        department
      );
    }

    this.router.navigate(['/department/table']);
  }
}
