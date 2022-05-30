import { Component, Inject, OnInit } from '@angular/core';
import { ModalDataModel } from '@app/core/models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@app/shared/ui-kits/material/material.module';

@Component({
  selector: 'uw-http-error-modal',
  templateUrl: './http-error-modal.component.html',
  styleUrls: ['./http-error-modal.component.scss'],
})
export class HttpErrorModalComponent implements OnInit {
  message!: string;

  constructor(
    private dialogRef: MatDialogRef<HttpErrorModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ModalDataModel,
  ) {
  }

  ngOnInit(): void {
    this.message = this.data.message ?? '';
  }

  handleAgree(): void {
    this.dialogRef.close();
  }
}
