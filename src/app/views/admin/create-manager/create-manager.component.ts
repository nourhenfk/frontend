import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { User } from 'src/app/models/user';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.scss']
})
export class CreateManagerComponent {
  manager: Manager = new Manager(0, "", "", "", 0, "");
  password: string = "";
  username:string ="";
  constructor( private managerServiceService :ManagerServiceService,
    private router :Router) { }
  saveManager(){
    var user = new User(this.username,
      this.manager.email,

      this.password,
      "MANAGER")
      this.manager.user = user
    this.managerServiceService.createManager(this.manager).subscribe(data => {console.log(data);
      this.router.navigate(['admin/managers']);
    },
  error =>console.log(error)
    );
  }

  onSubmit() {
    console.log( this.manager);
    this.saveManager();
  }

  ngOnInit(): void {
  }
}
