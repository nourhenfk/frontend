import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTeamsComponent } from './liste-teams.component';

describe('ListeTeamsComponent', () => {
  let component: ListeTeamsComponent;
  let fixture: ComponentFixture<ListeTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
