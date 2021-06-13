import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'user-form',
    component: UserformComponent,
  },
  {
    path: 'user-form/:id',
    component: UserformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
