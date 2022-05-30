/* eslint-disable @typescript-eslint/dot-notation */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { HttpErrorModalComponent } from '@app/shared/components';
import { MAT_DIALOG_DATA, MatDialogRef } from '@app/shared/ui-kits/material/material.module';
import { SharedModule } from '@app/shared/shared.module';

describe('HttpErrorModalComponent', () => {
  let component: HttpErrorModalComponent;
  let fixture: ComponentFixture<HttpErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: 'Error message' } },
        { provide: MatDialogRef, useValue: { close: () => {} } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('internal structure should be correct', () => {
    const container = fixture.debugElement.query(By.css('.modal-container'));
    expect(container).toBeTruthy();
    expect(container.children[0].attributes['class']).toMatch('header-section');
    expect(container.children[1].attributes['class']).toMatch('body');
    expect(container.children[2].attributes['class']).toMatch('control-section');
  });

  it('get info from providers', () => {
    component.ngOnInit();
    expect(component.message).toBe('Error message');
  });

  it('dialog should be closed after handle agree', () => {
    const button = fixture.debugElement.query(By.css('.control-section > .round-button'));
    const handleAgreeSpy = spyOn(component, 'handleAgree');
    button.triggerEventHandler('click', null);
    expect(button.nativeElement.textContent).toBe('understood');
    expect(handleAgreeSpy).toHaveBeenCalled();
  });
});
