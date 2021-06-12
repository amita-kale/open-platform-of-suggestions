import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { Statuses } from 'src/app/shared/models/status.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ideas: Array<Idea> = [];
  statuses: Statuses;
  selectedStatus = '';

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.homeService.getStatuses().subscribe((response: any) => {
      this.statuses = response;
      this.selectedStatus = this.statuses.underEvaluation;
      this.getIdeas(this.selectedStatus);
    });
  }

  getIdeas(status) {
    this.homeService.getIdeas().subscribe((response: Array<Idea>) => {
      this.ideas = response.filter(idea => idea.status === status);
    });
  }

  viewIdea(ideaId) {
    this.router.navigate(['/idea/view-idea/' + ideaId]);
  }

  statusClicked(status) {
    this.selectedStatus = status;
    this.getIdeas(this.selectedStatus);
  }
}
