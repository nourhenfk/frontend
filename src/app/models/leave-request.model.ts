import { User } from "./user";

export class LeaveRequest {
  id: number;
  user: User;
  startDate: Date;
  endDate: Date;
  documents: File[];
  reason: string;
  status: string;

  constructor(
    id: number,
    user: User,
    startDate: Date,
    endDate: Date,
    documents: File[],
    reason: string,
    status: string
  ) {
    this.id = id;
    this.user = user;
    this.startDate = startDate;
    this.endDate = endDate;
    this.documents = documents;
    this.reason = reason;
    this.status = status;
  }
}
