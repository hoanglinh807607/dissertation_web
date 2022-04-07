import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../share/shared.module';
import {routes} from './post-login.routes';
import { HomeComponent } from './home/home.component';
import { HostComponent } from './host/host.component';
import { ListHouseComponent } from './list-house/list-house.component';


@NgModule({
  declarations: [
  
    HomeComponent,
       HostComponent,
       ListHouseComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PostLoginModule { }
