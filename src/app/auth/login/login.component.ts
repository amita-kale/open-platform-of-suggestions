import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
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
  users: Array<User> = [];
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
  }
  loginClicked() {
    const user = this.users.find(
      (ele) =>
        ele.userName === this.userlogin.userName &&
        ele.password === this.userlogin.password
    );
    localStorage.setItem('user', JSON.stringify(user));

    if (user) {
      this.router.navigate(['/home']);
    } else {
      alert('username  and password is incorrect');
    }
  }
}
