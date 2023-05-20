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
   onClickFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.updatePhoto(this.formateur.id, file).subscribe(
      (formateur: FormateurExterne) => {
        console.log('Photo updated successfully!');
        this.formateur = formateur;
      },
      (error) => console.log(error)
    );
  }
  updatePhoto(id: number, file: File) {
    return this.formateurServiceService.updatePhoto(id, file);
  }
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          this.updatePhoto(this.formateur.id, file).subscribe(
            (formateur: FormateurExterne) => {
              console.log('Photo updated successfully!');
              this.formateur = formateur;
            },
            (error) => console.log(error)
          );
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  public onFileDrop(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.updatePhoto(this.formateur.id, file).subscribe(
            (formateur: FormateurExterne) => {
              console.log('Photo updated successfully!');
              this.formateur = formateur;
            },
            (error) => console.log(error)
          );
        });
      }
    }
  }

}
