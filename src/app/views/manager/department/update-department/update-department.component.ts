import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { DepartmentServiceService } from 'src/app/services/department-service.service';


@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  departmentId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.departmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departmentId = params['id'];
      this.getDepartmentById(this.departmentId);
    });
  }

  getDepartmentById(id: number): void {
    this.departmentService.getDepartmentById(id)
      .subscribe((department: Department) => {
        this.departmentForm.patchValue({
          name: department.name,
          description: department.description
        });
      }, error => {
        // Handle error
      });
  }

  onSubmit(): void {
    if (this.departmentForm.invalid) {
      return;
    }

    const updatedDepartment: Department = {
      id: this.departmentId,
      name: this.departmentForm.value.name,
      description: this.departmentForm.value.description,
      users: [],
      teams: []
    };

    this.departmentService.updateDepartment(this.departmentId, updatedDepartment)
      .subscribe(() => {
        this.router.navigate(['/departments']);
      }, error => {
        // Handle error
      });
  }
}
