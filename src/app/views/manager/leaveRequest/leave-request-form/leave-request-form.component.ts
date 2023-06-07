import { LeaveRequestService } from './../../../../services/leave-request-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveRequest } from 'src/app/models/leave-request.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.scss']
})
export class LeaveRequestFormComponent implements OnInit {
  leaveRequestForm!: FormGroup;
  selectedDocuments!: File[];

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthServiceService,
    private leaveRequestService: LeaveRequestService
  ) {}

  ngOnInit() {
    this.initLeaveRequestForm();
  }

  initLeaveRequestForm() {
    this.leaveRequestForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
      documents: [[]]
    });
  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.selectedDocuments = Array.from(inputElement.files);
    }
  }

  onSubmit() {
    if (this.leaveRequestForm.invalid) {
      return;
    }

    const userId: number | undefined = this.authService.getUserId();
    if (userId === undefined) {
      // Handle error when user ID is undefined
      console.error('User ID is undefined');
      return;
    }

    const leaveRequest: LeaveRequest = this.leaveRequestForm.value;
    this.leaveRequestService
      .createLeaveRequest(userId, leaveRequest, this.selectedDocuments)
      .subscribe(
        (createdLeaveRequest) => {
          // Handle success
          console.log('Leave request created:', createdLeaveRequest);
        },
        (error) => {
          // Handle error
          console.error('Error creating leave request:', error);
        }
      );
  }



  }




