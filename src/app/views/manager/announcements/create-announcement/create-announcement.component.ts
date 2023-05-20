import { AnnouncementServiceService } from './../../../../services/announcement-service.service';
import { Announcement } from './../../../../models/announcement.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {
  announcement: Announcement = new Announcement(0,"", "", new Date(), "","","");

  constructor(private announcementServiceService :AnnouncementServiceService,
   private router :Router) {}
   onSubmit(): void {
     this.announcementServiceService.addAnnouncement(this.announcement)
       .subscribe(() => {
         console.log('Announcement added successfully');
         this.router.navigate(['/manager/announcements']);
       });
   }
}
