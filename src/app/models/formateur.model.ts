export class FormateurExterne {
  id: number;
  prenom: string;
  nom: string;
  phone: number;
  company: string;
  photoUrl?:string;
  photo?: Blob;


  constructor(
    id: number,
    prenom: string,
    nom: string,
    phone: number,
    company: string,
    photoUrl?:string,
    photo?: Blob
  ) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.phone = phone;
    this.company = company;
    this.photoUrl= photoUrl;
    this.photo=photo;
  }
}
