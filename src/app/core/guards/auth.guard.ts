import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    const allowedRoles: Array<string> = next.data['roles'];

    const user: User = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);

    if (!user) {
      this.router.navigate(['/login']);
    }

    const allowed: boolean = allowedRoles.includes(user.role);

    if (!allowed) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
