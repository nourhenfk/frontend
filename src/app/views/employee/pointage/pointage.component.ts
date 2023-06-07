import { PointageServiceService } from './../../../services/pointage-service.service';
import { Pointage } from './../../../models/pointage.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthServiceService } from './../../../services/auth-service.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})
export class PointageComponent implements OnInit {
  isPointageStarted: boolean = false;
  pointage!: Pointage;
  user!: User;

  constructor(private pointageService: PointageServiceService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.pointage = new Pointage(0, '', '', new User(0,'', '', '')); // Provide the required arguments
    this.user = new User(0,'', '', '');
  } 

  startPointage(): void {

          this.pointageService.pointer(this.user).subscribe(
            (resp) => {
              console.log("resp")
              console.log(resp)
              this.isPointageStarted = true;
              this.pointage.arrivalTime = new Date().toLocaleString();
            },
            (error) => {
              if(error.status == 201) {
                this.isPointageStarted = true;
              this.pointage.arrivalTime = new Date().toLocaleString();
              }
              // Handle error if necessary
              console.log(error)
            }
          );
    }

    stopPointage(): void {

      this.pointageService.terminerPointage(this.user).subscribe(
        (resp) => {

        },
        (error) => {
          if(error.status == 200) {
            this.isPointageStarted = false;
          this.pointage.departureTime = new Date().toLocaleString();
          }
          // Handle error if necessary
          console.log(error)
        }
      );
}


}
