import { Component, computed, inject } from '@angular/core';
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

  //VISA TOTALPOÄNG
  //Computed signal som räknar ut totalt antal högskolepoäng
  totalPoints = computed(() => {

    //Variabel för totalsumma
    let total = 0;

    //Loopar igenom alla kurser i egna ramschemat
    this.schedule().forEach(course => {

      //Lägger ihop tidigare totalsumma med kursens poäng
      total = total + course.points;

    });

    //Returnerar totalsumma
    return total;

  });

  //TA BORT KURS
  //Funktion för att ta bort kurs
  remove(courseCode: string) {
    this.scheduleService.removeCourse(courseCode);
  }

}
