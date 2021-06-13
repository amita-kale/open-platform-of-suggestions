import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { Roles } from 'src/app/shared/models/roles.model';
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
  roles: Roles;

  constructor(private ideaService: IdeaService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.ideaService.getStatuses().subscribe((response: any) => {
      this.ideaService.getRoles().subscribe((roles: Roles) => {
        this.roles = roles;
        this.statuses = response;
        this.selectedStatus = this.statuses.underEvaluation;
        this.getIdeas(this.selectedStatus);
      });
    });
  }

  getIdeas(status) {
    this.ideaService.getIdeas().subscribe((response: Array<Idea>) => {
      this.ideas = response.filter(
        (idea) =>
          idea.status === status &&
          (this.user.role === this.roles.adminRole
            ? true
            : +idea.departmentId === +this.user.departmentId)
      );
    });
  }

  viewIdea(ideaId) {
    this.router.navigate(['/idea/view-pending-idea/' + ideaId]);
  }

  statusClicked(status) {
    this.selectedStatus = status;
    this.getIdeas(this.selectedStatus);
  }
}
