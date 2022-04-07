import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from '../../customer/pre-login/forgot-password/forgot-password.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '**', redirectTo: 'login'},
];
