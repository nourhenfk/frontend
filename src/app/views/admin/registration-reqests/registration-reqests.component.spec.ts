import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReqestsComponent } from './registration-reqests.component';

describe('RegistrationReqestsComponent', () => {
  let component: RegistrationReqestsComponent;
  let fixture: ComponentFixture<RegistrationReqestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationReqestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationReqestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
