import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepartmentsComponent } from './liste-departments.component';

describe('ListeDepartmentsComponent', () => {
  let component: ListeDepartmentsComponent;
  let fixture: ComponentFixture<ListeDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
