import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const loggedInEmployeeId = this.authService.getEmployeeId(); // Use the new method
    if (loggedInEmployeeId) {
      this.employeeService.getEmployeeById(loggedInEmployeeId).subscribe(
        (employee: Employee) => {
          this.employee = employee;
          // Call a method to fetch the logged-in employee's missions
          this.fetchEmployeeMissions();
        },
        (error) => {
          console.error('Failed to retrieve employee data', error);
        }
      );
    } else {
      console.error('Failed to get logged-in employee ID');
    }
  }

  fetchEmployeeMissions(): void {
    // Use the retrieved employee object to access the missions
    const missions = this.employee.missions;
    // Process the missions as needed
    console.log(missions);
  }
}
