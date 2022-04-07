import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPreLoginComponent } from './layout-pre-login/layout-pre-login.component';
import { LayoutPostLoginComponent } from './layout-post-login/layout-post-login.component';
import {RouterModule} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {routes} from './semi-routing.route';



@NgModule({
  declarations: [
    LayoutPreLoginComponent,
    LayoutPostLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
  ]
})
export class SemiLoginModule { }
