import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupkitchenComponent } from './signupkitchen.component';

describe('SignupkitchenComponent', () => {
  let component: SignupkitchenComponent;
  let fixture: ComponentFixture<SignupkitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupkitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
