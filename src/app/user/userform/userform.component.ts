import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  isEdit = false;
  index = -1;
  user = {
    id: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: '',
    email: '',
    password: null,
    departmentid: null,
    departmentname: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.id) {
      this.isEdit = true;
      const stud = this.userService.getSpecificUserByIndex(
        this.routeParam.snapshot.params.id
      );

      // this.user = {
      //   firstname: stud.firstname,
      //   role: stud.role,
      // };
    }
  }

  submitClicked() {
    // const user = {
    //   firstname: this.user.firstname,
    //   role: this.user.role,
    // };

    // if (this.isEdit == false) {
    //   this.userService.addUserData(user);
    // } else {
    //   this.userService.updateUser(this.routeParam.snapshot.params.id, user);
    // }

    this.userService.addUserData(this.user).subscribe(() => {});

    this.router.navigate(['/user/user']);
  }
  resetClicked() {
    this.isEdit = false;
    this.index = -1;
  }
}
