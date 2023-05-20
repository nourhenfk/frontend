import { User } from "./user";

export class Pointage {
  id: number;
  arrivalTime: string;
  departureTime: string;
  user: User;

  constructor(
    id: number,
    arrivalTime: string,
    departureTime: string,
    user: User
  ) {
    this.id = id;
    this.arrivalTime = arrivalTime;
    this.departureTime = departureTime;
    this.user = user;
  }
}
