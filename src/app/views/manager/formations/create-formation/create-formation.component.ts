import { FormationServiceService } from './../../../../services/formation-service.service';
import { Formation, Status } from './../../../../models/formation.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurExterne } from 'src/app/models/formateur.model';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent {
  formation: Formation = new Formation(0, "", "", new Date(), new Date(), Status.EN_COURS, [], undefined);

  formateurExs: FormateurExterne[] = [];
  formateurIns: Employee[] = []
  idSelectedFormateurIn: number = 0;
  idSelectedFormateurEx: number = 0;
  idSelectedParticipants: number[] = []
  employees: Employee[] = []

  statusOptions = [
    { value: Status.EN_COURS, label: 'En cours' },
    { value: Status.TERMINEE, label: 'Terminée' },
    { value: Status.ANNULEE, label: 'Annulée' },
    { value: Status.EN_PAUSE, label: 'En pause' }
  ];
  constructor(private formationServiceService :FormationServiceService,
    private formateurService:FormateurServiceService,
    private employeeService: EmployeeService,
   private router :Router) {}

   ngOnInit(): void {
    this.formateurService.getAllFormateurs().subscribe((data) => {
      this.formateurExs = data
    })

    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data
      this.formateurIns = data
    })
  }
   onSubmit(): void {
    console.log(this.idSelectedFormateurEx)
    const formateur =  this.formateurExs.find((element) => {
      console.log(element, this.idSelectedFormateurEx, element.id === this.idSelectedFormateurEx)
      return element.id == this.idSelectedFormateurEx
    })
    this.formation.formateurEx = formateur



    this.formation.employee = this.formateurIns.find((element) => {
      console.log(element, this.idSelectedFormateurIn, element.id === this.idSelectedFormateurIn)
      return element.id == this.idSelectedFormateurIn
    })

    this.formation.participants = this.idSelectedParticipants.map((el) => {
      return this.employees.find((e) => {
        return e.id == el
      }) ?? new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");
    })
    console.log(this.formation)
     this.formationServiceService.addFormation(this.formation)
       .subscribe(() => {
         console.log('Formation added successfully');
         this.router.navigate(['/manager/formations']);
       });
   }
}
