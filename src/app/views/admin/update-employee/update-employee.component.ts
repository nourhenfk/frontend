import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  id !: number;
  employee: Employee = new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");

  constructor(private employeeServiceService : EmployeeService,
    private route :ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
this.employee=new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");
    this.id = this.route.snapshot.params['id'];
    this.employeeServiceService.getEmployeeById(this.id)
    .subscribe(data => {
       console.log(data)
       this.employee=data;
      },
      (error) => console.log(error)
    );
  }
updateEmployee(){
  this.employeeServiceService.updateEmployee(this.id,this.employee)
    .subscribe(data =>{
       console.log(data);
       this.router.navigate(['admin/employees']);
    },
    (error) => console.log(error)
    );

}
onSubmit(){
  this.updateEmployee();
}

}
