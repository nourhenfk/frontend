import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-liste-employee',
  templateUrl: './liste-employee.component.html',
  styleUrls: ['./liste-employee.component.scss']
})
export class ListeEmployeeComponent {
  ListEmployees: Employee[] = [];

  constructor(private employeeServiceService :EmployeeService,
   private router : Router) { }
   ngOnInit(): void {

this.getEmployeeList();
  }
private getEmployeeList(){
  this.employeeServiceService.getAllEmployees().subscribe(data => {this.ListEmployees = data;
  });
}
updateEmployee(id:number){
this.router.navigate(['admin/UpdateEmployee',id]);
}
deleteEmployee(id:number){
  this.employeeServiceService.deleteEmployee(id).subscribe(data =>{
    console.log(data);
this.getEmployeeList();
  });
  }

  detailsEmployee(id:number){
    this.router.navigate(['admin/DetailsEmployee',id])
  }
}
