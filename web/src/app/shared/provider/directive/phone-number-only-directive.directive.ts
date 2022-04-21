import { Directive, ElementRef, HostListener } from '@angular/core';
import {Constants} from "../../helper/constants";

@Directive({
  selector: '[NumberOnly]'
})
export class PhoneNumberOnlyDirective {

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;

    const next: string = current.concat(event.key);
    if (next && !String(next).match(Constants.PHONE_NUMBER_PLUS)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  public onPaste(e: any): void {
    const current: string = e.clipboardData.getData('Text');
    if (current && !String(current).match(Constants.PHONE_NUMBER_PLUS)) {
      e.preventDefault();
    }
  }
}
