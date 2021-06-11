import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserformComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
