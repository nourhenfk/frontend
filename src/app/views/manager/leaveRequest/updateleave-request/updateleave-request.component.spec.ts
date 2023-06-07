import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleaveRequestComponent } from './updateleave-request.component';

describe('UpdateleaveRequestComponent', () => {
  let component: UpdateleaveRequestComponent;
  let fixture: ComponentFixture<UpdateleaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateleaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateleaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
