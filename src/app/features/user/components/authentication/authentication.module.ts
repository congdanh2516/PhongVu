import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiddenPasswordPipe } from 'src/app/core/pipe/hiddenPassword/hidden-password.pipe';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    HiddenPasswordPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    SharedModule
  ],
  exports: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
