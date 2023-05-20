import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(0, "", "", "", 0, "");
  password: string = "";
  username:string ="";
  constructor( private employeeServiceService :EmployeeServiceService,
    private router :Router) { }
  saveEmployee(){
    var user = new User(this.username,
      this.employee.email,

      this.password,
      "Employee")
      this.employee.user = user
    this.employeeServiceService.createEmployee(this.employee).subscribe(data => {console.log(data);
      this.router.navigate(['admin/employees']);
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
