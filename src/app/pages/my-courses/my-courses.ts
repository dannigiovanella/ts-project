import { Component, inject } from '@angular/core';
//Importerar service för att hantera kurser
import { MyScheduleService } from '../../services/my-schedule-service';

@Component({
  selector: 'app-my-courses',
  imports: [],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.scss',
})
export class MyCourses {


  //Injectar service för hantering av kurser
  private scheduleService = inject(MyScheduleService);

  //Hämtar det egna ramschemat från service så det kan visas i html
  schedule = this.scheduleService.mySchedule;

  //Funktion för att ta bort kurs
  remove(courseCode: string) {
    this.scheduleService.removeCourse(courseCode);
  }

  message = this.scheduleService.message;

}
