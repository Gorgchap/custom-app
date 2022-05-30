import { Component, Inject, OnInit } from '@angular/core';
import { ModalDataModel } from '@app/core/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@app/shared/ui-kits/material/material.module';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.scss']
})
export class StatusModalComponent implements OnInit {
  message!: string;

  constructor(
    private dialogRef: MatDialogRef<StatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ModalDataModel,
  ) {
  }

  ngOnInit(): void {
    this.message = this.data.message;
  }

  close(): void {
    this.dialogRef.close();
  }
}
