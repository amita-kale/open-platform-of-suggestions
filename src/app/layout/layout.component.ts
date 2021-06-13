import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../core/services/core.service';
import { Roles } from '../shared/models/roles.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  user: User;
  roles: Roles;

  constructor(private router: Router, private coreService: CoreService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    this.coreService.getRoles().subscribe((roles: Roles) => {
      this.roles = roles;
    });
    
  }

  onClickOfLogout() {
    const isconfirmed = confirm('Are you sure you want to logout??');
    if (isconfirmed) {
      this.router.navigate(['auth/login']);
    }
  }
}
