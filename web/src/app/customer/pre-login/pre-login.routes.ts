import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutLoginComponent} from './shared/layout/layout-login/layout-login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'pull', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'recovery-password', component: ForgotPasswordComponent},
    ]
  },
];
