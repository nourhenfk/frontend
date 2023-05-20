import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation, Status } from 'src/app/models/formation.model';
import { FormationServiceService } from 'src/app/services/formation-service.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss']
})
export class UpdateFormationComponent {
  formation: Formation = new Formation(0,"", "", new Date(), new Date(), Status.EN_COURS, "");
  statusOptions = [
    { value: Status.EN_COURS, label: 'En cours' },
    { value: Status.TERMINEE, label: 'Terminée' },
    { value: Status.ANNULEE, label: 'Annulée' },
    { value: Status.EN_PAUSE, label: 'En pause' }
  ];
  constructor(private FormationServiceService :FormationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.FormationServiceService.getFormationById(id).subscribe((formation) => {
      this.formation = formation;
    });
  }

  onSubmit(): void {
    this.FormationServiceService.updateFormation(this.formation.id, this.formation)
      .subscribe(() => {
        console.log('formation updated successfully');
        this.router.navigate(['/manager/formations']);
      });
  }
}
