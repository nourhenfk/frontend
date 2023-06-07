import { MissionService } from './../../../../services/mission-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Mission } from 'src/app/models/mission.model';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent implements OnInit {
  mission: Mission = new Mission(0, "", "", new Date(), new Date(), 0, 0, "", );
  employees: Employee[] = []
  idSelectedEmployee: number = 0;

    ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe((data) => {
        this.employees = data
      })
    }

  constructor(private MissionService :MissionService,
   private router :Router,
   private employeeService: EmployeeService) {}
   onSubmit(): void {
    console.log(this.idSelectedEmployee)
    const employeeId =  this.employees.find((element) => {
      console.log(element, this.idSelectedEmployee, element.id === this.idSelectedEmployee)
      return element.id == this.idSelectedEmployee
    })?.id
    this.mission.employee = new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");
    console.log(this.mission)
     this.MissionService.addMission(this.mission)
       .subscribe(() => {
         console.log('mission added successfully');
         this.router.navigate(['/manager/missions']);
       });
   }
}
