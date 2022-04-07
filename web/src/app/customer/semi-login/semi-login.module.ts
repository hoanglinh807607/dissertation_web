import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './semi-login.routes';
import {SemiComponent} from './layout/semi.component';
import {PreLoginModule} from '../pre-login/pre-login.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    SemiComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PreLoginModule,
  ]
})
export class SemiLoginModule { }
