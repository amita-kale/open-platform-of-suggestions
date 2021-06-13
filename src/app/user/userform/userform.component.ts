import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';
import { Department } from 'src/app/shared/models/department.model';
import { Roles } from 'src/app/shared/models/roles.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  isNew = true;
  userModel: User = new User();
  roles: Roles;
  departments: Array<Department> = [];

  constructor(
    private coreService: CoreService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.id) {
      this.isNew = false;
      this.getUser(this.routeParam.snapshot.params.id);
    }

    this.coreService.getRoles().subscribe((roles: Roles) => {
      this.roles = roles;
    });

    this.coreService.getDepartments().subscribe((response: any) => {
      this.departments = response;
    });
  }

  getUser(id) {
    this.coreService.getUser(id).subscribe((user: User) => {
      this.userModel = user;
      console.log(this.userModel);
    });
  }

  submitClicked(form) {
    form.submitted = true;
    if (form.valid) {
      if (this.isNew) {
        const userModel = this.userModel;
        delete userModel.id;
        this.coreService.createUser(userModel).subscribe(() => {
          this.router.navigate(['/user/user']);
        });
      } else {
        this.coreService.updateUser(this.userModel).subscribe(() => {
          this.router.navigate(['/user/user']);
        });
      }
    }
    // const user = {
    //   firstname: this.user.firstname,
    //   role: this.user.role,
    // };

    // if (this.isEdit == false) {
    //   this.userService.addUserData(user);
    // } else {
    //   this.userService.updateUser(this.routeParam.snapshot.params.id, user);
    // }

    // this.userService.addUserData(this.user).subscribe(() => {});

    // this.router.navigate(['/user/user']);
  }

  goBack() {
    history.back();
  }
}
