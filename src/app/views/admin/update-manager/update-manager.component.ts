import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.scss']
})
export class UpdateManagerComponent {
  id !: number;
  manager: Manager = new Manager(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");

  constructor(private managerServiceService : ManagerServiceService,
    private route :ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
this.manager=new Manager(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");
    this.id = this.route.snapshot.params['id'];
    this.managerServiceService.getManagerById(this.id)
    .subscribe(data => {
       console.log(data)
       this.manager=data;
      },
      (error) => console.log(error)
    );
  }
updateManager(){
  this.managerServiceService.updateManager(this.id,this.manager)
    .subscribe(data =>{
       console.log(data);
       this.router.navigate(['admin/managers']);
    },
    (error) => console.log(error)
    );

}
onSubmit(){
  this.updateManager();
}
}
