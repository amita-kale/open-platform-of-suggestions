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
    username: '',
    password: '',
  };
  users = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getIdea().subscribe((response: any) => {
      this.users = response;
    });
  }
  loginClicked() {
    const user = this.users.find(
      (ele) =>
        ele.username === this.userlogin.username &&
        ele.password === this.userlogin.password
    );
    if (user) {
      this.router.navigate(['/home']);
    } else {
      alert('username incorrect');
    }
  }
}
