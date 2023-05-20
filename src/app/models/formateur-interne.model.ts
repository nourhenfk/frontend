import { Employee } from "./employee";

export class FormateurInterne extends Employee {
  grade: string;
  constructor(id: number, firstname: string, lastname: string, email: string, tel: number, adress: string, grade: string) {
    super(id, firstname, lastname, email, tel, adress);
    this.grade = grade;
  }
}
