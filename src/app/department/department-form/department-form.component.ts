import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css'],
})
export class DepartmentFormComponent implements OnInit {
  // ngOnInit(): void {
  //   if (this.routeParam.snapshot.params.id) {
  //     this.isEdit = true;
  //     const stud = this.departmentService.getSpecificStudentByIndex(
  //       this.routeParam.snapshot.params.id
  //     );

  //     this.department = {
  //       name: stud.name,
  //       head: stud.head,
  //     };
  //   }
  // }

  // submitClicked() {
  //   const department = {
  //     name: this.department.name,
  //     head: this.department.head,
  //   };

  //   if (this.isEdit == false) {
  //     this.departmentService.addDepartmentData(department);
  //   } else {
  //     this.departmentService.updateStudent(
  //       this.routeParam.snapshot.params.id,
  //       department
  //     );
  //   }

  // }

  //  resetClicked() {
  //    this.isEdit = false;
  //    this.index = -1;
  //  }

  //////////////////////////////////////////////////////
  isEdit = false;
  indexOfEdit = -1;
  department = {
    id: '',
    name: '',
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit() {}

  submitClicked() {
    console.log(this.department);
    if (this.isEdit === true) {
      console.log(this.indexOfEdit);

      this.departmentService
        .updateData(this.indexOfEdit, this.department)
        .subscribe(() => {
          //     this.getData();
          this.isEdit = false;
        });
    } else {
      this.departmentService.addData(this.department).subscribe(() => {
        this.department.name = '';
        this.router.navigate(['/department/table']);
      });
    }

    // editClicked(item) {
    //   console.log('edit');
    //   this.department.name = item.firstName;

    //   this.isEdit = true;
    //   this.indexOfEdit = item.id;
    // }

    // resetClicked(){
    //   this.isEdit = false;
    //   this.indexOfEdit = -1;
    // }
  }
}
