import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';
import { Idea } from 'src/app/shared/models/idea.model';
import { Roles } from 'src/app/shared/models/roles.model';
import { Statuses } from 'src/app/shared/models/status.model';
import { User } from 'src/app/shared/models/user.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-view-pending-idea',
  templateUrl: './view-pending-idea.component.html',
  styleUrls: ['./view-pending-idea.component.css'],
})
export class ViewPendingIdeaComponent implements OnInit {
  idea: Idea;
  selectedStatuses: Array<string>;
  statuses: Statuses;
  actionModel = {
    status: null,
    comment: null,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ideaService: IdeaService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));

    const id = this.route.snapshot.params.id;
    this.ideaService.getIdeaById(id).subscribe((response: Idea) => {
      this.idea = response;
      this.coreService.getStatuses().subscribe((statuses: Statuses) => {
        this.coreService.getRoles().subscribe((roles: Roles) => {
          this.statuses = statuses;
          this.selectedStatuses = [
            statuses.ideaAlreadyExists,
            statuses.notAcceptedForImplementation,
          ];
          if (user.role === roles.teacherRole) {
            this.selectedStatuses.push(statuses.acceptedByTeacher);
          } else if (user.role === roles.hodRole) {
            this.selectedStatuses = [
              ...this.selectedStatuses,
              ...[
                statuses.acceptedByTeacher,
                statuses.acceptedForImplementation,
              ],
            ];
          } else {
            this.selectedStatuses = [
              ...this.selectedStatuses,
              ...[
                statuses.acceptedByTeacher,
                statuses.acceptedForImplementation,
                statuses.implemented,
              ],
            ];
          }

          const index = this.selectedStatuses.indexOf(this.idea.status);
          if (index !== -1) {
            this.selectedStatuses.splice(index, 1);
          }
        });
      });
    });
  }

  onSubmit(form) {
    form.submitted = true;
    if (form.valid) {
      const user: User = JSON.parse(localStorage.getItem('user'));

      debugger;
      if (
        this.idea.status === this.statuses.underEvaluation ||
        this.idea.status === this.statuses.ideaAlreadyExists ||
        this.idea.status === this.statuses.notAcceptedForImplementation
      ) {
        this.idea.actions.teacher.comment = this.actionModel.comment;
        this.idea.actions.teacher.date = new Date().toISOString();
        this.idea.actions.teacher.id = user.id.toString();
      } else if (this.idea.status === this.statuses.acceptedByTeacher) {
        this.idea.actions.hod.comment = this.actionModel.comment;
        this.idea.actions.hod.date = new Date().toISOString();
        this.idea.actions.hod.id = user.id.toString();
      } else if (this.idea.status === this.statuses.acceptedForImplementation) {
        this.idea.actions.admin.comment = this.actionModel.comment;
        this.idea.actions.admin.date = new Date().toISOString();
        this.idea.actions.admin.id = user.id.toString();
      }
      this.idea.status = this.actionModel.status;

      this.ideaService.updateIdea(this.idea).subscribe(() => {
        this.router.navigate(['/idea/pending-for-accepatance/']);
      });
    }
  }

  goBack() {
    history.back();
  }
}
