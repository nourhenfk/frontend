import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/department.model';

import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
import { TeamService } from 'src/app/services/team-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
  teamForm: FormGroup;
  departments: Department[] = [];
  selectedDepartment: Department | undefined;
  teamId: number;
  users: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentServiceService,
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required]
    });
    this.teamId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getTeamDetails();
    this.getAllDepartments();
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      }, error => {
        // Handle error
      });
  }

  getTeamDetails(): void {
    this.teamService.getTeamById(this.teamId)
      .subscribe((team: Team) => {
        this.teamForm.patchValue({
          name: team.name,
          department: team.department
        });
        this.selectedDepartment = team.department;
      }, error => {
        // Handle error
      });
  }

  getAllDepartments(): void {
    this.departmentService.getAllDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      }, error => {
        // Handle error
      });
  }

  onDepartmentChange() {

  }

  onSubmit(): void {
    if (this.teamForm.invalid) {
      return;
    }

    const updatedTeam: Team = {
      id: this.teamId,
      name: this.teamForm.value.name,
      department: this.selectedDepartment!,
      users: this.teamForm.value.users
    };

    this.teamService.updateTeam(this.teamId, updatedTeam)
      .subscribe(() => {
        this.router.navigate(['/teams']);
      }, error => {
        // Handle error
      });
  }

}
