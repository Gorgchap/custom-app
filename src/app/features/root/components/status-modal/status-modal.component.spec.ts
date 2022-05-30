/* eslint-disable @typescript-eslint/dot-notation */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { StatusModalComponent } from '@app/features/root/components';
import { MatDialogRef, MAT_DIALOG_DATA } from '@app/shared/ui-kits/material/material.module';
import { SharedModule } from '@app/shared/shared.module';

describe('StatusModalComponent', () => {
  let component: StatusModalComponent;
  let fixture: ComponentFixture<StatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: 'Some message' } },
        { provide: MatDialogRef, useValue: { close: (dialogResult?: any) => {} } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('internal structure should be correct', () => {
    const container = fixture.debugElement.query(By.css('.modal-container'));
    expect(container).toBeTruthy();
    expect(container.children[0].attributes['class']).toMatch('body');
    expect(container.children[1].attributes['class']).toMatch('control-section');
  });

  it('get info from providers', () => {
    component.ngOnInit();
    expect(component.message).toBe('Some message');
  });

  it('dialog should be closed after close', () => {
    const button = fixture.debugElement.query(By.css('.control-section > .round-button'));
    const handleAgreeSpy = spyOn(component, 'close');
    button.triggerEventHandler('click', null);
    expect(button.nativeElement.textContent).toBe('OK');
    expect(handleAgreeSpy).toHaveBeenCalled();
  });
});
