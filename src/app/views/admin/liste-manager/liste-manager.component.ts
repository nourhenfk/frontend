import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-liste-manager',
  templateUrl: './liste-manager.component.html',
  styleUrls: ['./liste-manager.component.scss']
})
export class ListeManagerComponent {
  ListManagers: Manager[] = [];

  constructor(private managerServiceService :ManagerServiceService,
   private router : Router) { }

  ngOnInit(): void {

this.getManagerList();
  }
private getManagerList(){
  this.managerServiceService.getManagerList().subscribe(data => {this.ListManagers = data;
  });
}
updateManager(id:number){
this.router.navigate(['admin/UpdateManager',id]);
}
deleteManager(id:number){
  this.managerServiceService.deleteManager(id).subscribe(data =>{
    console.log(data);
this.getManagerList();
  });
  }

  detailsManager(id:number){
    this.router.navigate(['admin/DetailsManager',id])
  }
}
