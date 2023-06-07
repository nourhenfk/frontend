import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.scss']
})
export class UpdateMissionComponent {
  mission: Mission = new Mission(0, "", "", new Date(), new Date(), 0, 0, "", );
  idSelectedEmployee: number = 0;
  employees: Employee[] = []
  constructor(private MissionService :MissionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idSelectedEmployee)
    const employeeId =  this.employees.find((element) => {
      console.log(element, this.idSelectedEmployee, element.id === this.idSelectedEmployee)
      return element.id == this.idSelectedEmployee
    })?.id
    this.mission.employee = new Employee(0, "", "", "", 0, "", "", 0, "", 0, new Date(), new File([], ""), "");
    console.log(this.mission)
    this.MissionService.getMissionById(id).subscribe((mission) => {
      this.mission = mission;
    });
  }

  onSubmit(): void {
    this.MissionService.updateMission(this.mission.id, this.mission)
      .subscribe(() => {
        console.log('mission updated successfully');
        this.router.navigate(['/manager/missions']);
      });
  }
}
