/* eslint-disable @typescript-eslint/dot-notation */
import { TestBed } from '@angular/core/testing';
import { ModalService } from '@app/core/services/modal.service';
import { StatusModalComponent } from '@app/features/root/components';
import { HttpErrorModalComponent } from '@app/shared/components';
import { MatDialog, MatDialogConfig } from '@app/shared/ui-kits/material/material.module';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: { open: (template: any, config?: MatDialogConfig) => {} } },
      ],
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show error dialog works correct', () => {
    const matDialogSpy = spyOn(service['matDialog'], 'open');
    service.showErrorDialog('Some error');
    expect(matDialogSpy).toHaveBeenCalledWith(HttpErrorModalComponent, {
      autoFocus: true,
      disableClose: false,
      width: '470px',
      height: '248px',
      data: { message: 'Some error' },
      panelClass: 'app-modal',
    });
  });

  it('show status dialog works correct', () => {
    const matDialogSpy = spyOn(service['matDialog'], 'open');
    service.showStatusDialog('Some status');
    expect(matDialogSpy).toHaveBeenCalledWith(StatusModalComponent, {
      autoFocus: true,
      disableClose: false,
      width: '300px',
      height: '100px',
      data: { message: 'Some status' },
      panelClass: 'app-modal',
    });
  });
});
