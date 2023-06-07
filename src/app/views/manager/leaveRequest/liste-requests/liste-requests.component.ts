import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest } from 'src/app/models/leave-request.model';
import { LeaveRequestService } from 'src/app/services/leave-request-service.service';

@Component({
  selector: 'app-liste-requests',
  templateUrl: './liste-requests.component.html',
  styleUrls: ['./liste-requests.component.scss']
})
export class ListeRequestsComponent {
  leaveRequests: LeaveRequest[] = [];

  constructor(private leaveRequestService: LeaveRequestService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveRequestService.getAllLeaveRequests()
      .subscribe(
        leaveRequests => {
          this.leaveRequests = leaveRequests;
        },
        error => {
          console.error('Error fetching leave requests:', error);
        }
      );
  }

  rejectLeaveRequest(id: number): void {
    this.leaveRequestService.rejectLeaveRequest(id)
      .subscribe(
        () => {
          console.log('Leave request rejected successfully');
          // Refresh the leave request list
          this.loadLeaveRequests();
        },
        error => {
          console.error('Error rejecting leave request:', error);
        }
      );
  }

  approveLeaveRequest(id: number): void {
    this.leaveRequestService.approveLeaveRequest(id)
      .subscribe(
        () => {
          console.log('Leave request approved successfully');
          // Refresh the leave request list
          this.loadLeaveRequests();
        },
        error => {
          console.error('Error approving leave request:', error);
        }
      );
  }
  viewLeaveRequestDetails(id: number): void {
    this.router.navigate(['/leaveRequestDetails', id]);
  }
}
