import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { User } from 'src/app/shared/models/user.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css'],
})
export class ViewIdeaComponent implements OnInit {
  idea: Idea;
  users: Array<User> = [];
  teacherName: string;
  hodName: string;
  adminName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ideaService: IdeaService
  ) {}

  ngOnInit(): void {
    console.log(this.route, this.router);

    const id = this.route.snapshot.params.id;
    this.ideaService.getIdeaById(id).subscribe((response: any) => {
      this.idea = response;
      this.ideaService.getUsers().subscribe((users: Array<User>) => {
        this.users = users;

        const teacherUser = this.users.find(
          (user) => user.id === +this.idea?.actions?.teacher?.id
        );
        this.teacherName = `${teacherUser?.firstName} ${teacherUser?.lastName}`;

        const hodUser = this.users.find(
          (user) => user.id === +this.idea?.actions?.hod?.id
        );
        this.hodName = `${hodUser?.firstName} ${hodUser?.lastName}`;

        const adminUser = this.users.find(
          (user) => user.id === +this.idea?.actions?.admin?.id
        );
        this.adminName = `${adminUser?.firstName} ${adminUser?.lastName}`;
      });
    });
  }

  goBack() {
    history.back();
  }
}
