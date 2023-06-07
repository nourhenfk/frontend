import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPointageComponent } from './mon-pointage.component';

describe('MonPointageComponent', () => {
  let component: MonPointageComponent;
  let fixture: ComponentFixture<MonPointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonPointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
