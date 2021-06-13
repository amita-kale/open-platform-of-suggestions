import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { ADMIN, HOD, STUDENT, TEACHER } from './shared/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [ADMIN, HOD, TEACHER, STUDENT],
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'idea',
        loadChildren: () =>
          import('./idea/idea.module').then((m) => m.IdeaModule),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./department/department.module').then(
            (m) => m.DepartmentModule
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [ADMIN],
        },
      },
      {
        path: 'rating',
        loadChildren: () =>
          import('./rating/rating.module').then((m) => m.RatingModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
        canActivate: [AuthGuard],
        data: {
          roles: [ADMIN],
        },
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
