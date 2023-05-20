import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurExterne } from 'src/app/models/formateur.model';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';

@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.scss']
})
export class ListeFormateursComponent {
  formateurs: FormateurExterne[] = [];

  constructor(private  formateurServiceService :FormateurServiceService,
    private router:Router) {}

    ngOnInit(): void {

      this.getAllFormateurs();
        }

    private getAllFormateurs(){
        this.formateurServiceService.getAllFormateurs().subscribe(data => {this.formateurs = data;
          console.log(data)
        });
      }

  updateFormateur(id:number){
    this.router.navigate(['manager/updateFormateur',id]);
    }


    deleteFormateur(id:number){
      this.formateurServiceService.deleteFormateur(id).subscribe(data =>{
        console.log(data);
    this.getAllFormateurs();
      });
      }


}
