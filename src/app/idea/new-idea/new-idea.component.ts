import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/shared/models/department.model';
import { Idea } from 'src/app/shared/models/idea.model';
import { Statuses } from 'src/app/shared/models/status.model';
import { User } from 'src/app/shared/models/user.model';
import { ideaService } from '../idea.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css'],
})
export class NewIdeaComponent implements OnInit {
  ideaModel: Idea = new Idea();
  departments: Array<Department> = [];
  statuses: Statuses;

  constructor(private ideaService: ideaService, private router: Router) {}

  ngOnInit(): void {
    this.ideaService.getDepartments().subscribe((response: any) => {
      this.departments = response;
    });
    this.ideaService.getStatuses().subscribe((response: any) => {
      this.statuses = response;
    });
  }

  createIdea() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    this.ideaModel.authorId = user.id;
    this.ideaModel.authorName = user.firstName + ' ' + user.lastName;
    this.ideaModel.createdOn = new Date().toISOString();
    this.ideaModel.status = this.statuses.userEvaluation;

    if (this.ideaModel.departmentId) {
      const department = this.departments.find(
        (department) => department.id === +this.ideaModel.departmentId
      );
      this.ideaModel.departmentName = department?.name || '';
    }

    const ideaModel = this.ideaModel;
    delete ideaModel.id;

    this.ideaService.createIdea(ideaModel).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
