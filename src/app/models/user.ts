export class User {

  username: string;
  email: string;
  password: string;
  role?:string;

  constructor( username: string, email: string, password: string, role?:string) {

    this.username = username;
    this.email = email;
    this.password = password;
    if(typeof role !== "undefined") {
      this.role = role
    }
  }

}
