import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routes} from "./post-login.route";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from './profile/profile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {ImageCropperModule} from "ngx-image-cropper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {LightboxModule} from "ng-gallery/lightbox";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    BsDatepickerModule,
    MatSelectModule,
    MatIconModule,
    ImageCropperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LightboxModule
  ]
})
export class PostLoginModule { }
