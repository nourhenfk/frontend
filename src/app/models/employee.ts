import { User } from "./user";

export class Employee {
  id:number;
  firstname:String;
  lastname:String;
  email:string;
  tel : number;
  adress :String;
  user? :User;
  constructor(id: number, firstname: string,lastname: string, email: string, tel: number, adress: string,user? :User) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.tel = tel;
    this.adress = adress;
    if(typeof user !== "undefined")
    this.user=user;
}}

