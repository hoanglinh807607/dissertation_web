import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ShareModule} from "./shared/share.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ShareModule
  ]
})
export class AdminModule { }
