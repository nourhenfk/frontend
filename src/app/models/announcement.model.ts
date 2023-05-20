export class Announcement {
  id:number;
  type:String;
  importance:String;
  publicationDate:Date;
  subject:String;
  text:String;
  status:String;
  constructor(id:number,
    type:String,
    importance:String,
    publicationDate:Date,
    subject:String,
    text:String,
    status:String){
      this.id=id;
      this.type=type;
      this.importance=importance;
      this.publicationDate=publicationDate;
      this.subject=subject;
      this.text=text;
      this.status=status

  }


}
