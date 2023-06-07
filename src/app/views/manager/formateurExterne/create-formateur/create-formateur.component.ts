import { FormateurServiceService } from './../../../../services/formateur-service.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { FormateurExterne } from './../../../../models/formateur.model';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.scss']
})
export class CreateFormateurComponent {
  public files: NgxFileDropEntry[] = [];
  formateur: FormateurExterne = new FormateurExterne(0,"", "", 0,"", "",);
  constructor(
    private formateurServiceService :FormateurServiceService,
   private router :Router) {}
   onSubmit(): void {
     this.formateurServiceService.addFormateur(this.formateur)
       .subscribe(() => {
         console.log('Formateur added successfully');
         this.router.navigate(['/manager/formateurs']);
       });
   }
   
}
