export class UserRegistrationRequest {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  status: string;

  constructor(
    id:number,
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    this.id=id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = "USER";
    this.status = "PENDING"; // set default status to PENDING
  }
}
