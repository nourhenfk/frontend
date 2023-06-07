import { UserServiceService } from './../../../../services/user-service.service';

import { TeamService } from './../../../../services/team-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';

import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user';
import { DepartmentServiceService } from 'src/app/services/department-service.service';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  teamForm: FormGroup;
  departments: Department[] = [];
  users: User[] = [];
  selectedDepartment: Department | undefined;
  selectedUsers: User[] = [];
  idSelectedUser: number = 0

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentServiceService,
    private teamService: TeamService,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllUsers();
  }

  getAllDepartments(): void {
    this.departmentService.getAllDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      }, error => {
        // Handle error
      });
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      }, error => {
        // Handle error
      });
  }

  onDepartmentChange(): void {
    this.selectedUsers = [];
  }

  onSubmit(): void {
    if (this.teamForm.invalid) {
      return;
    }

    const team: Team = {
      id: 0,
      name: this.teamForm.value.name,
      department: this.selectedDepartment!,
      users: this.selectedUsers
    };

    this.teamService.createTeam(team)
      .subscribe(createdTeam => {
        team.id = createdTeam.id;
        this.router.navigate(['/teams']);
      }, error => {
        // Handle error
      });
  }
}
