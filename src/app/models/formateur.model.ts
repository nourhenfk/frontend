export class FormateurExterne {
  id: number;
  prenom: string;
  nom: string;
  phone: number;
  company: string;


  constructor(
    id: number,
    prenom: string,
    nom: string,
    phone: number,
    company: string,
    picture: string
  ) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.phone = phone;
    this.company = company;

  }
}
