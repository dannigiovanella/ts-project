import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MyScheduleService } from '../../services/my-schedule-service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  //Injectar service som hanterar "Mina kurser"
  private scheduleService = inject(MyScheduleService);

  //VISA ANTAL TILLAGDA KURSER
  //Antal kurser i ramschemat. Computed räknar ut antal
  courseCount = computed(() => {

    //Hämtar alla(length) kurser från service för eget ramschema. 
    return this.scheduleService.mySchedule().length;

  });

  //VISA TOTALPOÄNG
  //Computed som räknar ut totalt antal högskolepoäng
  totalPoints = computed(() => {

    //Variabel för att lagra totala summan av högskolepoängen
    let total = 0;

    //Loopar igenom alla kurser i  egna ramschemat
    this.scheduleService.mySchedule().forEach(course => {

      //Lägger ihop tidigare totalsumma med kurspoäng
      total = total + course.points;

    });

    //Returnerar totala poängen
    return total;

  });

}
