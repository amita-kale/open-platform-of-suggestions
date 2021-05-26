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
  ideas = [];

  constructor(
    private studentideaService: StudentideaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentideas = this.studentideaService.getStudents();
    this.ideas = this.studentideas;
  }

  viewallideadetail(i, item) {
    console.log('index:', i, item);
    this.router.navigate(['/idea/view-idea/' + i]);
  }

  statusClicked(status) {
    console.log(status);

    this.studentideas = this.ideas.filter((ele) => {
      console.log(ele.title);

      return ele.status == status;
    });
    console.log(this.studentideas);
  }
}
