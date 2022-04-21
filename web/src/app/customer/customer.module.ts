import {NgModule} from '@angular/core';
import {CustomerRoutingModule} from './customer-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgSelectModule} from '@ng-select/ng-select';
import {AgmCoreModule} from '@agm/core';
import {Constants} from '../shared/helper/constants';
import {MatDialogModule} from '@angular/material/dialog';
import {HoverNavLoginDirective} from './directive/hover-nav-login.directive';
import {ShareModule} from "./share/shared.module";

@NgModule({
  declarations: [
    HoverNavLoginDirective,
  ],
  imports: [
    CustomerRoutingModule,
    MatSnackBarModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
      apiKey: Constants.googleMapApiKey,
      libraries: ['places']
    }),
    MatDialogModule,
    ShareModule
  ]
})
export class CustomerModule { }
