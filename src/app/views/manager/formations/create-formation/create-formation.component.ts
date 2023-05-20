import { FormationServiceService } from './../../../../services/formation-service.service';
import { Formation, Status } from './../../../../models/formation.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent {
  formation: Formation = new Formation(0,"", "", new Date(), new Date(), Status.EN_COURS, "");
  statusOptions = [
    { value: Status.EN_COURS, label: 'En cours' },
    { value: Status.TERMINEE, label: 'Terminée' },
    { value: Status.ANNULEE, label: 'Annulée' },
    { value: Status.EN_PAUSE, label: 'En pause' }
  ];
  constructor(private formationServiceService :FormationServiceService,
   private router :Router) {}
   onSubmit(): void {
     this.formationServiceService.addFormation(this.formation)
       .subscribe(() => {
         console.log('Formation added successfully');
         this.router.navigate(['/manager/formations']);
       });
   }
}
