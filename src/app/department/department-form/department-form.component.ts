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
  isEdit: string;
  id: any;
  departmentName: string;
  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.isEdit = this.route.snapshot.params.isEdit;
    console.log(this.route.snapshot);
    if (this.isEdit === 'true') {
      this.getDepartmentName(this.id);
    }
  }
  getDepartmentName(id) {
    console.log('inside method');

    this.departmentService.getDepartmentName(id).subscribe((res: any) => {
      this.departmentName = res.name;
      console.log(res);
    });
  }
  submitClicked() {
    if (this.isEdit == 'true') {
      const data = {
        name: this.departmentName,
      };
      this.departmentService.updateData(this.id, data).subscribe(() => {
        //     this.getData();
        this.isEdit = 'false';
        this.router.navigate(['/department/table']);
      });
    } else {
      console.log(this.departmentName);
      const data = {
        name: this.departmentName,
      };
      this.departmentService.addData(data).subscribe(() => {
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
