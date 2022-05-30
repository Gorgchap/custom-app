import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { LoaderComponent } from '@app/shared/components';
import { SharedModule } from '@app/shared/shared.module';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not appear because of undefined inputs', () => {
    const element = fixture.debugElement.query(By.css('mat-spinner'));
    expect(element.styles['width']).toBe('0px');
    expect(element.styles['height']).toBe('0px');
    expect(element.children.length).toBe(1);
    expect(element.children[0].nativeNode['__ngContext__'][29]).toBe('0 0 -10 -10');
  });

  it('should be a normal appearance', () => {
    component.diameter = 40;
    component.strokeWidth = 3;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('mat-spinner'));
    expect(element.styles['width']).toBe('40px');
    expect(element.styles['height']).toBe('40px');
    expect(element.children.length).toBe(1);
    expect(element.children[0].nativeNode['__ngContext__'][29]).toBe('0 0 33 33');
  });
});
