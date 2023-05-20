import { Employee } from "./employee";
import { FormateurInterne } from "./formateur-interne.model";
import { FormateurExterne } from "./formateur.model";

export class Formation {
  id: number;
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  status: Status;
  documents: string;
  formateurEx?: FormateurExterne;
    formateurIn?: FormateurInterne;
    participants?: Employee[];

  constructor(
    id: number,
    titre: string,
    description: string,
    dateDebut: Date,
    dateFin: Date,
    status: Status,
    documents: string,
    formateurEx?: FormateurExterne,
    formateurIn?: FormateurInterne,
    participants?: Employee[]
  ) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.status = status;
    this.documents = documents;
    if(typeof formateurEx !== 'undefined'){
      this.formateurEx = formateurEx;
    }
    if(typeof formateurIn !== 'undefined'){
      this.formateurIn = formateurIn;
    }
    if(typeof participants !== 'undefined'){
      this.participants = participants;
    }
  }
}
export enum Status {
  EN_COURS = "EN_COURS",
  TERMINEE = "TERMINEE",
  ANNULEE = "ANNULEE",
  EN_PAUSE = "EN_PAUSE"
}
