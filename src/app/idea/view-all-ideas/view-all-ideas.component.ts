import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentideaService } from '../studentidea.service';

@Component({
  selector: 'app-view-all-ideas',
  templateUrl: './view-all-ideas.component.html',
  styleUrls: ['./view-all-ideas.component.css'],
})
export class ViewAllIdeasComponent implements OnInit {
  studentideas = [];
  ideas = [];
  //{
  // title: '',
  // description: '',
  // benefits: '',
  // department: '',
  // }

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
    // this.router.navigate(['idea/new-idea/' + i]);
    this.router.navigate(['/idea/view-idea/' + i]);
  }
  deleteFunction(i) {
    console.log('delete call');
    this.studentideaService.delStudents(i);
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
