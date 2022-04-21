import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloseDialogComponent} from "./dialogs/close-dialog/close-dialog.component";
import {PhoneNumberOnlyDirective} from "./provider/directive/phone-number-only-directive.directive";


@NgModule({
  declarations: [
    CloseDialogComponent,
    PhoneNumberOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneNumberOnlyDirective
  ]
})
export class SharedModule { }
