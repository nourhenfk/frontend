import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurExterne } from 'src/app/models/formateur.model';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.scss']
})
export class UpdateFormateurComponent {
  formateur: FormateurExterne = new FormateurExterne(0,"", "", 0,"","");

  constructor(
    private formateurServiceService :FormateurServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formateurServiceService.getFormateurById(id).subscribe((formateur) => {
      this.formateur = formateur;
    });
  }

  onSubmit(): void {
    this.formateurServiceService.updateFormateur(this.formateur.id, this.formateur)
      .subscribe(() => {
        console.log('Formateur updated successfully');
        this.router.navigate(['/manager/formateurs']);
      });
  }
}
