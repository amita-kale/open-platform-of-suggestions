import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentideaService } from '../studentidea.service';

@Component({
  selector: 'app-my-idea',
  templateUrl: './my-idea.component.html',
  styleUrls: ['./my-idea.component.css'],
})
export class MyIdeaComponent implements OnInit {
  studentideas = [];

  constructor(
    private studentideaService: StudentideaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentideas = this.studentideaService.getStudents();
  }

  viewallideadetail(i, item) {
    console.log('index:', i, item);
    this.router.navigate(['/idea/view-idea/' + i]);
  }
}
