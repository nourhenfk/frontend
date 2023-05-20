import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent {
  id !: number;
  employee: Employee = new Employee(0, "", "", "", 0, "");

  constructor(private route:ActivatedRoute,
    private EmployeerServiceService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee=new Employee(0, "", "", "", 0, "");
    this.id = this.route.snapshot.params['id'];
    this.EmployeerServiceService.getEmployeeById(this.id)
    .subscribe(data => {
       console.log(data)
       this.employee=data;
      },
      (error) => console.log(error)
    );
  }
}
