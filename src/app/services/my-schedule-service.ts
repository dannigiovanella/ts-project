import { Injectable, signal } from '@angular/core';
import { CourseInterface } from '../models/course-interface';

@Injectable({
  providedIn: 'root',
})

// Klass för sparade kurser/schema
export class MyScheduleService {

  //Signal som lagrar användarens ramschemat (listan av valda kurser)
  //Startvärdet hämtas från localStorage (om det finns sparad data där)
  mySchedule = signal<CourseInterface[]>(this.loadFromStorage());


  //Funktion för att lägga till en kurs i eget ramschema/kurslista
  addCourse(course: CourseInterface): boolean {

    //Kontrollerar om kursen redan finns i schemat
    //find() returnerar kursobjektet om den hittas
    const exists = this.mySchedule().find(
      c => c.courseCode === course.courseCode
    );

    //Om kurs redan finns så misslyckads det att lägga till
    if (exists) {
      return false;
    }

    //Uppdaterar signalen genom att skapa en ny array
    //använder (...) för att behålla befintliga kurser
    this.mySchedule.set([...this.mySchedule(), course]);

    //Sparar i localStorage
    this.saveToStorage();

    return true;

  }


//Funktion för att ta bort en kurs från schemat
removeCourse(courseCode: string) {

  //Skapar en ny array som filtrerar bort kursen som matchar kurskoden
  //filter returnerar alla kurser som inte matchar kurskod
  const updated = this.mySchedule().filter(
    course => course.courseCode !== courseCode
  );

  //Uppdaterar signalen med den nya listan
  this.mySchedule.set(updated);

  //Sparar den uppdaterade listan i localStorage
  this.saveToStorage();
}

  //Funktion som sparar schemat till localStorage
  private saveToStorage() {
  //JSON.stringify används då localstorage bara kan lagra strängar
  localStorage.setItem(
    'schedule',
    JSON.stringify(this.mySchedule())
  );
}

  //Funktion som laddar schemat från localStorage vid laddning av sida
  private loadFromStorage(): CourseInterface[] {
  //Hämtar sparad data från localStorage
  const data = localStorage.getItem('schedule');

  //Om det finns sparad data
  if (data) {

    //Konverterar json sträng tillbaka till JavaScript objekt
    return JSON.parse(data);
  }
  //Om ingen data finns returneras en tom array
  return [];
}
}




