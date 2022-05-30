import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from "@app/app-routing.module";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppRoutingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have as title 'custom-app'`, () => {
  //   expect(component.title).toMatch('custom-app');
  // });
});
