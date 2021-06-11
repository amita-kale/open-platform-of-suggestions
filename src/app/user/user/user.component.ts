import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userdata = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userdata = this.userService.getUserInfo();
    console.log(this.userdata);
  }

  deleteFunction(i) {
    this.userService.delUser(i);
  }

  editFunction(i, item) {
    console.log('index:', i, item);
    this.router.navigate(['user/user-form/' + i]);
  }
}
