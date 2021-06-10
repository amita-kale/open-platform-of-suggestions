import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
