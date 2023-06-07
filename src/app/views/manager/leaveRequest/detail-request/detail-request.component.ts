import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveRequest } from 'src/app/models/leave-request.model';
import { LeaveRequestService } from 'src/app/services/leave-request-service.service';


@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.scss']
})
export class DetailRequestComponent implements OnInit {
  leaveRequestId!: number;
  leaveRequest!: LeaveRequest;

  constructor(
    private route: ActivatedRoute,
    private leaveRequestService: LeaveRequestService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.leaveRequestId = +params['id'];
      this.loadLeaveRequestDetails();
    });
  }

  loadLeaveRequestDetails() {
    this.leaveRequestService.getLeaveRequestById(this.leaveRequestId).subscribe(
      (leaveRequest: LeaveRequest) => {
        this.leaveRequest = leaveRequest;
      },
      (error) => {
       
      }
    );
  }
  getDocumentUrl(document: File): string {
    // Generate a temporary URL for displaying purposes
    return URL.createObjectURL(document);
  }

}
