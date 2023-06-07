import { Component, OnInit } from '@angular/core';
import { Pointage } from 'src/app/models/pointage.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PointageServiceService } from 'src/app/services/pointage-service.service';

@Component({
  selector: 'app-mon-pointage',
  templateUrl: './mon-pointage.component.html',
  styleUrls: ['./mon-pointage.component.scss']
})
export class MonPointageComponent implements OnInit {
  pointages: Pointage[] = [];

  constructor(
    private pointageService: PointageServiceService,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.getPointagesByUser();
  }

  getPointagesByUser(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.pointageService.getAllPointagesByUser(userId).subscribe(
        (pointages: Pointage[]) => {
          this.pointages = pointages;
        },
        (error) => {
          console.log('Error retrieving pointages:', error);
        }
      );
    }
  }
}
