import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");




  password: string = "";
  username:string ="";
  id!: number;
  constructor( private employeeServiceService :EmployeeService,
    private router :Router) { }
  saveEmployee(){
    var user = new User(this.id,
      this.username,
      this.employee.email,

      this.password,
      "Employee")
      this.employee.user = user
    this.employeeServiceService.createEmployee(this.employee).subscribe(data => {console.log(data);
      this.router.navigate(['manager/employees']);
    },
  error =>console.log(error)
    );
  }

  onSubmit() {
    console.log( this.employee);
    this.saveEmployee();
  }

  ngOnInit(): void {
  }
}
