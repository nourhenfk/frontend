import { Component } from '@angular/core';
import { UserRegistrationRequest } from 'src/app/models/user-registration-request';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-registration-reqests',
  templateUrl: './registration-reqests.component.html',
  styleUrls: ['./registration-reqests.component.scss']
})
export class RegistrationReqestsComponent {
  registrationRequests: UserRegistrationRequest[] = [];

  constructor(private userRegistrationService: UserRegistrationService) {}

  ngOnInit(): void {
    this.getPendingRegistrationRequests();
  }

  getPendingRegistrationRequests(): void {
    this.userRegistrationService.getPendingRegistrationRequests()
      .subscribe(registrationRequests => this.registrationRequests = registrationRequests);
  }

  approveRegistrationRequest(requestId: number): void {
    this.userRegistrationService.approveRegistrationRequest(requestId)
      .subscribe(() => {
        this.registrationRequests = this.registrationRequests.filter(request => request.id !== requestId);
      });
  }

  rejectRegistrationRequest(requestId: number): void {
    this.userRegistrationService.rejectRegistrationRequest(requestId)
      .subscribe(() => {
        this.registrationRequests = this.registrationRequests.filter(request => request.id !== requestId);
      });
  }
}
