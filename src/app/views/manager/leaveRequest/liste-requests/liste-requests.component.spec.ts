import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRequestsComponent } from './liste-requests.component';

describe('ListeRequestsComponent', () => {
  let component: ListeRequestsComponent;
  let fixture: ComponentFixture<ListeRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
