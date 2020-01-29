import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(private dialogRef: NbDialogRef<ConfirmBoxComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  validate() {
    this.dialogRef.close(true);
  }

}
