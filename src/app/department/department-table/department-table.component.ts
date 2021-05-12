import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  studentdata = {
    departmentname: 'hi',
    departmenthead: 'helo'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
