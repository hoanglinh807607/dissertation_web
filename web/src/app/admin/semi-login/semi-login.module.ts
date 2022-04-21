import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPreLoginComponent } from './layout-pre-login/layout-pre-login.component';
import { LayoutPostLoginComponent } from './layout-post-login/layout-post-login.component';
import {RouterModule} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {routes} from './semi-routing.route';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    LayoutPreLoginComponent,
    LayoutPostLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SemiLoginModule { }
