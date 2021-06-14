import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Array<User> = [];

  constructor(private coreService: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.coreService.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });
  }

  deleteClicked(id: number) {
    const confirmed = confirm('Are you sure, you want to delete??');
    if (confirmed) {
      this.coreService.deleteUsers(id).subscribe((users: Array<User>) => {
        this.getUsers();
      });
    }
  }

  editFunction(item) {
    this.router.navigate(['users/user-form/' + item.id]);
  }
}
