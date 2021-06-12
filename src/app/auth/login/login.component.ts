import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userlogin = {
    userName: '',
    password: '',
  };
  users = [];
  adminDetails = {
    userName: '',
    password: '',
    role: '',
    name: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUsers().subscribe((response: any) => {
      this.users = response;
    });
    this.authService.getAdminDetails().subscribe((response: any) => {
      this.adminDetails = response;
    });
  }
  loginClicked() {
    const user = this.users.find(
      (ele) =>
        ele.username === this.userlogin.userName &&
        ele.password === this.userlogin.password
    );
    const isAdminUser =
      this.adminDetails.userName === this.userlogin.userName &&
      this.adminDetails.password === this.userlogin.password;
    if (user || isAdminUser) {
      this.router.navigate(['/home']);
    } else {
      alert('username  and password is incorrect');
    }
  }
}
