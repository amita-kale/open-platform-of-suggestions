import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  submitClicked() {
    console.log("submit clicked");

  }

}
