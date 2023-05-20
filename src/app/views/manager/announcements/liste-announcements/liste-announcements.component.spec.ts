import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnnouncementsComponent } from './liste-announcements.component';

describe('ListeAnnouncementsComponent', () => {
  let component: ListeAnnouncementsComponent;
  let fixture: ComponentFixture<ListeAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
