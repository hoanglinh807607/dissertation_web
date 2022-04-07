import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FogotPasswordComponent } from './fogot-password/fogot-password.component';
import {RouterModule} from '@angular/router';
import {routes} from './pre-login.route';



@NgModule({
  declarations: [
    LoginComponent,
    FogotPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PreLoginModule { }
