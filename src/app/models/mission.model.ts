import { Employee } from "./employee";

export class Mission {
  id: number;
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  tempsEstime: number;
  tempsPasse: number;
  status: string;
  employee?: Employee;

  constructor(
  id: number,
  titre: string,
  description: string,
  dateDebut: Date,
  dateFin: Date,
  tempsEstime: number,
  tempsPasse: number,
  status: string,
  employee?: Employee
  ) {
  this.id = id;
  this.titre = titre;
  this.description = description;
  this.dateDebut = dateDebut;
  this.dateFin = dateFin;
  this.tempsEstime = tempsEstime;
  this.tempsPasse = tempsPasse;
  this.status = status;
  if(typeof employee !== 'undefined'){
    this.employee = employee;
  }

  }
  }
