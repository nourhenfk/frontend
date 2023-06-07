import { Team } from "./team.model";
import { User } from "./user";

export class Department {
  id: number;
  name: string;
  users: User[];
  teams: Team[];
  description: string;

  constructor(id: number, name: string, users: User[], teams: Team[], description: string) {
    this.id = id;
    this.name = name;
    this.users = users;
    this.teams = teams;
    this.description = description;
  }
}
