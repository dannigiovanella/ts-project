import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importerar interface för kursdata
import { CourseInterface } from '../../models/course-interface';

//Importerar service för kursdata
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})


//Klass för kurser. 
export class Courses {

  //Hämtar service med inject
  //Private då  variabeln bara kan användas inne i denna klass
  private courseService = inject(CourseService);

  //Signal för kursdata. array av CourseInterface med tomt startvärde
  courses = signal<CourseInterface[]>([]);

  //Signal för felhantering
  error = signal<string | null>(null);

  //Körs när komponenten laddas i DOM
  ngOnInit(): void {

    //Hämtar kursdata från service som returnerar en observable
    //Subscribe för att lyssna på resultatet
    this.courseService.getCourses().subscribe({

      //Om hämtning lyckas
      //data = svaret från service
      next: (data) => {

        //Uppdaterar signal med kursdata
        this.courses.set(data);

      },

      // Om nåt går fel vid API anrop (FÖRBÄTTRA DENNA SEN)
      error: () => {
        console.log("Nåt gick fel vid hämtning av kurser"),

          // Visar felmeddelande
          this.error.set("Nåt gick fel vid hämtning av kurser");
      }

    });

  }

}

