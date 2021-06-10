import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user = {
    username: '',
    lastname: '',
    email: '',
    password: null,
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  createAccount() {
    console.log(this.user);

    this.authService.postUser(this.user).subscribe(() => {});
    this.router.navigate(['/auth/login']);
  }
}
