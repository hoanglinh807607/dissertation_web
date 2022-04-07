import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './pre-login.routes';
import {SharedModule} from '../share/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {DropdownModule} from 'angular-bootstrap-md';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {RegisterComponent} from './register/register.component';
import {LayoutLoginComponent} from './shared/layout/layout-login/layout-login.component';
import {LoginComponent} from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const material = [
  MatSidenavModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LayoutLoginComponent,
    ForgotPasswordComponent,
  ],
  exports: [
    material,
    DropdownModule,
    BsDropdownModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    material
  ]
})
export class PreLoginModule { }
