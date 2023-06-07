import { Component, OnInit } from '@angular/core';
import { Pointage } from 'src/app/models/pointage.model';
import { PointageServiceService } from 'src/app/services/pointage-service.service';


@Component({
  selector: 'app-liste-pointages',
  templateUrl: './liste-pointages.component.html',
  styleUrls: ['./liste-pointages.component.scss']
})
export class ListePointagesComponent implements OnInit {
  pointages: Pointage[] = [];

  constructor(private pointageService: PointageServiceService) { }

  ngOnInit(): void {
    this.getAllPointages();
  }

  getAllPointages(): void {
    this.pointageService.getAllPointages().subscribe(
      (data: Pointage[]) => {
        this.pointages = data;
      },
      (error) => {
        console.log('Error retrieving pointages:', error);
      }
    );
  }
}
