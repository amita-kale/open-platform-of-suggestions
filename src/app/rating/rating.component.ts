import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  studentideas = [];
  ideas = [];

  constructor(private Ratingervice: RatingService, private router: Router) {}

  ngOnInit(): void {
    this.Ratingervice.getIdea().subscribe((response: any) => {
      this.studentideas = response;
      this.ideas = this.studentideas;
    });
  }

  viewallideadetail(i, item) {
    console.log('index:', i, item);
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
