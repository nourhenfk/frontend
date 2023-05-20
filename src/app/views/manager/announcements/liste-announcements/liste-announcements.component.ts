import { AnnouncementServiceService } from './../../../../services/announcement-service.service';
import { Announcement } from './../../../../models/announcement.model';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-announcements',
  templateUrl: './liste-announcements.component.html',
  styleUrls: ['./liste-announcements.component.scss']
})
export class ListeAnnouncementsComponent {
  announcements: Announcement[] = [];

  constructor(private announcementServiceService: AnnouncementServiceService,
    private router:Router) {}

    ngOnInit(): void {

      this.getAllAnnouncements();
        }

    private getAllAnnouncements(){
        this.announcementServiceService.getAllAnnouncements().subscribe(data => {this.announcements = data;
          console.log(data)
        });
      }

  updateAnnouncement(id:number){
    this.router.navigate(['manager/updateAnnouncement',id]);
    }


    deleteAnnouncement(id:number){
      this.announcementServiceService.deleteAnnouncement(id).subscribe(data =>{
        console.log(data);
    this.getAllAnnouncements();
      });
      }
}
