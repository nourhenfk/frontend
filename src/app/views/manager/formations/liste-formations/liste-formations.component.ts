import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation.model';
import { FormationServiceService } from 'src/app/services/formation-service.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.scss']
})
export class ListeFormationsComponent {
  ListFormations: Formation[] = [];

  constructor(private FormationServiceService :FormationServiceService,
   private router : Router) { }
   ngOnInit(): void {

this.getFormationList();
  }
private getFormationList(){
  this.FormationServiceService.getAllFormations().subscribe(data => {this.ListFormations = data; console.log(data)  });
}
updateFormation(id:number){
this.router.navigate(['manager/updateFormation',id]);
}
deleteFormation(id:number){
  this.FormationServiceService.deleteFormation(id).subscribe(data =>{
    console.log(data);
this.getFormationList();
  });
  }

}
