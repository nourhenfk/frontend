import { AnnouncementServiceService } from 'src/app/services/announcement-service.service';
import { Announcement } from './../../../../models/announcement.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.scss']
})
export class UpdateAnnouncementComponent {
  announcement: Announcement = new Announcement(0,"", "", new Date(), "","","");
  constructor(
    private announcementServiceService: AnnouncementServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.announcementServiceService.getAnnouncementById(id).subscribe((announcement) => {
      this.announcement = announcement;
    });
  }

  onSubmit(): void {
    this.announcementServiceService.updateAnnouncement(this.announcement.id, this.announcement)
      .subscribe(() => {
        console.log('Announcement updated successfully');
        this.router.navigate(['/manager/announcements']);
      });
  }
}
