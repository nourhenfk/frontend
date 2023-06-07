import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-details-manager',
  templateUrl: './details-manager.component.html',
  styleUrls: ['./details-manager.component.scss']
})
export class DetailsManagerComponent {
  id !: number;
  manager: Manager = new Manager(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");;

  constructor(private route:ActivatedRoute,
    private managerServiceService : ManagerServiceService) { }

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
}
