import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { DepartmentServiceService } from 'src/app/services/department-service.service';



@Component({
  selector: 'app-list-departments',
  templateUrl: './liste-departments.component.html',
  styleUrls: ['./liste-departments.component.scss']
})
export class ListDepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(): void {
    this.departmentService.getAllDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      }, error => {
        // Handle error
      });
  }

  navigateToUpdate(id: number): void {
    this.router.navigate(['/departments/update', id]);
  }

  navigateToCreate(): void {
    this.router.navigate(['/departments/create']);
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id)
      .subscribe(() => {
        this.departments = this.departments.filter(department => department.id !== id);
      }, error => {
        // Handle error
      });
  }
}
