import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeaService } from '../idea.service';

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

  constructor(private ideaservice: IdeaService, private router: Router) {}

  ngOnInit(): void {
    this.ideaservice.getIdeas().subscribe((response: any) => {
      this.studentideas = response;
      this.ideas = this.studentideas;
    });
  }
  viewallideadetail(i, item) {
    console.log('index:', i, item);
    // this.router.navigate(['idea/new-idea/' + i]);
    this.router.navigate(['/idea/view-idea/' + item.id]);
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
