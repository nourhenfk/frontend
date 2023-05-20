import { MoodService } from './../../../services/mood-service.service';
import { Component } from '@angular/core';
import { Mood } from 'src/app/models/mood.model';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mood: string = '';

  constructor(private moodService: MoodService) {}

  setMood(mood: string) {
    this.mood = mood;
    this.saveMoodToBackend();
  }

  private saveMoodToBackend() {
    const employeeId = 1; // Replace with the actual ID of the logged in employee
    const mood = new Mood(0,this.mood, { id: employeeId } as Employee);
    this.moodService.saveMood(mood).subscribe(
      (response: any) => {
        console.log('Mood saved to backend:', response);
      },
      (error: any) => {
        console.error('Error saving mood to backend:', error);
      }
    );
  }

}
