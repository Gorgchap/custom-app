import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { StatusModalComponent } from '@app/features/root/components';
import { HttpErrorModalComponent } from '@app/shared/components';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@app/shared/ui-kits/material/material.module';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private matDialog: MatDialog) {}

  showErrorDialog(message: string = ''): MatDialogRef<HttpErrorModalComponent> {
    return this.openDialogWindow(HttpErrorModalComponent, {
      width: '470px',
      height: '248px',
      data: { message },
      panelClass: 'app-modal',
    });
  }

  showStatusDialog(message: string): MatDialogRef<StatusModalComponent> {
    return this.openDialogWindow(StatusModalComponent, {
      width: '300px',
      height: '100px',
      data: { message },
      panelClass: 'app-modal',
    });
  }

  openDialogWindow<T, D = any, R = any>(template: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this.matDialog.open(template, Object.assign({ autoFocus: true, disableClose: false }, config));
  }
}
