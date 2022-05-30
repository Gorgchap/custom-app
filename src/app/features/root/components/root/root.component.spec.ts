/* eslint-disable @typescript-eslint/dot-notation */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalService } from '@app/core/services';
import { InfoService } from '@app/core/services/api';
import { RootComponent } from '@app/features/root/components';
import { SharedModule } from '@app/shared/shared.module';
import { of } from 'rxjs';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootComponent],
      imports: [RouterTestingModule, SharedModule],
      providers: [
        { provide: InfoService, useValue: { getInfo: () => of(true) } },
        {
          provide: ModalService,
          useValue: {
            showErrorDialog: (message?: string) => {},
            showStatusDialog: (message: string) => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    const updateInfoSpy = spyOn(component, 'updateInfo');
    component.ngOnInit();
    fixture.detectChanges();
    expect(updateInfoSpy).toHaveBeenCalled();
  });

  it('ngOnDestroy', () => {
    const updateInfoSpy = spyOn(component['onDestroy$'], 'next');
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(updateInfoSpy).toHaveBeenCalledWith(true);
  });

  it('button like method', () => {
    const [button1] = fixture.debugElement.queryAll(By.css('.round-button'));
    const onLikeSpy = spyOn(component, 'onLike');
    button1.triggerEventHandler('click', null);
    expect(button1.nativeElement.textContent).toMatch('Like');
    expect(onLikeSpy).toHaveBeenCalled();
  });

  it('button dislike method', () => {
    const [, button2] = fixture.debugElement.queryAll(By.css('.round-button'));
    const onDislikeSpy = spyOn(component, 'onDislike');
    button2.triggerEventHandler('click', null);
    expect(button2.nativeElement.textContent).toMatch('Dislike');
    expect(onDislikeSpy).toHaveBeenCalled();
  });

  it('button updateInfo method', () => {
    component.error = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.round-button'));
    const updateInfoSpy = spyOn(component, 'updateInfo');
    button.triggerEventHandler('click', null);
    expect(button.nativeElement.textContent).toMatch('Update info');
    expect(updateInfoSpy).toHaveBeenCalled();
  });

  it('loader', () => {
    component.loading = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-loader'))).toBeTruthy();
  });
});
