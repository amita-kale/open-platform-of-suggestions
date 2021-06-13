import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { Statuses } from 'src/app/shared/models/status.model';
import { User } from 'src/app/shared/models/user.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-pending-for-accepatance',
  templateUrl: './pending-for-accepatance.component.html',
  styleUrls: ['./pending-for-accepatance.component.css'],
})
export class PendingForAccepatanceComponent implements OnInit {
  ideas: Array<Idea> = [];
  statuses: Statuses;
  selectedStatus = '';
  user: User;

  constructor(private ideaService: IdeaService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.ideaService.getStatuses().subscribe((response: any) => {
      this.statuses = response;
      this.selectedStatus = this.statuses.underEvaluation;
      this.getIdeas(this.selectedStatus);
    });
  }

  getIdeas(status) {
    this.ideaService.getIdeas().subscribe((response: Array<Idea>) => {
      this.ideas = response.filter((idea) => idea.status === status);
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
