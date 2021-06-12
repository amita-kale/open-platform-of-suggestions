import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ideaService } from '../idea.service';

@Component({
  selector: 'app-pending-for-accepatance',
  templateUrl: './pending-for-accepatance.component.html',
  styleUrls: ['./pending-for-accepatance.component.css'],
})
export class PendingForAccepatanceComponent implements OnInit {
  studentideas = [];
  ideas = [];
  constructor(private ideaservice: ideaService, private router: Router) {}

  ngOnInit(): void {
    this.ideaservice.getIdeas().subscribe((response: any) => {
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
