import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-close-dialog',
  templateUrl: './close-dialog.component.html',
  styleUrls: ['./close-dialog.component.scss']
})
export class CloseDialogComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() okButton: string;
  @Input() haveCallback: boolean;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }
  onClickClose() {
    this.bsModalRef.hide();
    if (this.haveCallback) {
      this.bsModalRef.content.callback(true);
    }
  }
}
