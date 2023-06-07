import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePointagesComponent } from './liste-pointages.component';

describe('ListePointagesComponent', () => {
  let component: ListePointagesComponent;
  let fixture: ComponentFixture<ListePointagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePointagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
