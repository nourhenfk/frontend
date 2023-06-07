import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveRequest } from 'src/app/models/leave-request.model';
import { LeaveRequestService } from 'src/app/services/leave-request-service.service';

@Component({
  selector: 'app-updateleave-request',
  templateUrl: './updateleave-request.component.html',
  styleUrls: ['./updateleave-request.component.scss']
})
export class UpdateleaveRequestComponent {
  leaveRequestForm!: FormGroup;
  leaveRequestId!: number;
  leaveRequest!: LeaveRequest;
  isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private leaveRequestService: LeaveRequestService
  ) { }

  ngOnInit(): void {
    this.leaveRequestId = this.route.snapshot.params['id'];
    this.loadLeaveRequest();
    this.createForm();
  }

  loadLeaveRequest(): void {
    this.leaveRequestService.getLeaveRequestById(this.leaveRequestId)
      .subscribe(
        (leaveRequest) => {
          this.leaveRequest = leaveRequest;
          this.populateForm();
        },
        (error) => {
          console.error('Error loading leave request:', error);
        }
      );
  }

  createForm(): void {
    this.leaveRequestForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  populateForm(): void {
    if (this.leaveRequest) {
      this.leaveRequestForm.patchValue({
        startDate: this.leaveRequest.startDate,
        endDate: this.leaveRequest.endDate,
        reason: this.leaveRequest.reason
      });
    }
  }

  onSubmit(): void {
    if (this.leaveRequestForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const updatedLeaveRequest: LeaveRequest = {
      ...this.leaveRequest,
      startDate: this.leaveRequestForm.value.startDate,
      endDate: this.leaveRequestForm.value.endDate,
      reason: this.leaveRequestForm.value.reason
    };

    this.leaveRequestService.updateLeaveRequest(this.leaveRequestId, updatedLeaveRequest)
      .subscribe(
        (updatedLeaveRequest) => {
          console.log('Leave request updated:', updatedLeaveRequest);
          this.router.navigate(['/leave-requests']);
        },
        (error) => {
          console.error('Error updating leave request:', error);
          this.isSubmitting = false;
        }
      );
  }
}
