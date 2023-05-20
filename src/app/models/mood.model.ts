import { Employee } from "./employee";

export class Mood {
  id: number;
  moodValue: string;
  employee: Employee;

  constructor( id: number,moodValue: string, employee: Employee) {
    this.id = id;
    this.moodValue = moodValue;
    this.employee = employee;

  }
}
