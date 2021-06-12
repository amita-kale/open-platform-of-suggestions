import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css'],
})
export class DepartmentTableComponent implements OnInit {
  departmentData = [
    {
      id: '',
      name: '',
    },
  ];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.departmentData = this.departmentService.getDepartmentInfo();
    // console.log(this.departmentData);
    this.departmentService.getData().subscribe((response: any) => {
      this.departmentData = response;
    });
  }

  deleteClicked(item) {
    this.departmentService.deleteData(item.id).subscribe(() => {
      // this.getData();
    });
  }

  editFunction(item) {
    console.log(item);

    this.router.navigate(['department/form/' + item]);
  }
}
