import { Mission } from "./mission.model";
import { User } from "./user";


export class Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  tel: number;
  adress: string;
  civility: string;
  cin: number;
  skills: string;
  bankAccount: number;
  dateOfBirth: Date;
  picture: File; 
  education: string;
  user?: User;
  missions?: Mission[];

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    tel: number,
    adress: string,
    civility: string,
    cin: number,
    skills: string,
    bankAccount: number,
    dateOfBirth: Date,
    picture: File,
    education: string,
    user?: User,
    missions?: Mission[]
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.tel = tel;
    this.adress = adress;
    this.civility = civility;
    this.cin = cin;
    this.skills = skills;
    this.bankAccount = bankAccount;
    this.dateOfBirth = dateOfBirth;
    this.picture = picture;
    this.education = education;
    if (typeof user !== "undefined") {
      this.user = user;
    }
    if (typeof missions !== "undefined") {
      this.missions = missions;
    }
  }
}
