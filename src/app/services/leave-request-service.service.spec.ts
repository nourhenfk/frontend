import { TestBed } from '@angular/core/testing';

import { LeaveRequestServiceService } from './leave-request-service.service';

describe('LeaveRequestServiceService', () => {
  let service: LeaveRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
