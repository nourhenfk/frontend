import { Department } from "./department.model";
import { User } from "./user";

export class Team {
  id: number;
  name: string;
  department: Department;
  users: User[];

  constructor(id: number, name: string, department: Department, users: User[]) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.users = users;
  }
}
