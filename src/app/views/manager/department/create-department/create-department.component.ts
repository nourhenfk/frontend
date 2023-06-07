
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { DepartmentServiceService } from 'src/app/services/department-service.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  departmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentServiceService,
    private router: Router
  ) {
    this.departmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.departmentForm.get('name')
  }

  get description() {
    return this.departmentForm.get('description')
  }
  onSubmit(): void {
    if (this.departmentForm.invalid) {
      return;
    }

    const department: Department = new Department(
      0,
      this.departmentForm.value.name,
      [],
      [],
      this.departmentForm.value.description
    );

    this.departmentService.createDepartment(department)
    .subscribe((createdDepartment: Department) => {
      department.id = createdDepartment.id;
      this.router.navigate(['/departments']);
    }, error => {
      // Handle error
    });
  }
}
