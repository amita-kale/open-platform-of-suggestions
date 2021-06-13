import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { Statuses } from 'src/app/shared/models/status.model';
import { User } from 'src/app/shared/models/user.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-my-idea',
  templateUrl: './my-idea.component.html',
  styleUrls: ['./my-idea.component.css'],
})
export class MyIdeaComponent implements OnInit {
  ideas: Array<Idea> = [];
  statuses: Statuses;
  selectedStatus = '';

  constructor(private homeService: IdeaService, private router: Router) {}

  ngOnInit() {
    this.homeService.getStatuses().subscribe((response: any) => {
      this.statuses = response;
      this.selectedStatus = this.statuses.underEvaluation;
      this.getIdeas(this.selectedStatus);
    });
  }

  getIdeas(status) {
    const user: User = JSON.parse(sessionStorage.getItem('user'));

    this.homeService.getIdeas().subscribe((response: Array<Idea>) => {
      this.ideas = response.filter(
        (idea) => idea.status === status && user.id === idea.authorId
      );
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
