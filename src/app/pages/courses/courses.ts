import { Component, inject, signal, computed } from '@angular/core';
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



  /// FILTRERING ///

  //Signal för sökterm
  searchTerm = signal("");

  //Signal för valt ämne
  selectedSubject = signal("");


  //Computed - Beräknar värdet av signal för filterade kurser
  //Körs automatiskt om någon signal förändras
  filteredCourses = computed(() => {

    //Lagrar sökterm i lowercase och tar bort tomma mellanslag
    const filter = this.searchTerm().trim().toLowerCase();

    //Signa för att lagrar valt ämne (från dropdown)
    const subjectFilter = this.selectedSubject();

    //Varibel för filtrerade och kurser (kopia av array)
    let processedCourses = this.courses();

    /// FILTRERIGNVIA SÖKTERM ///
    //Filterar kurser om sökterm finns
    if (filter) {

      //Filtrerar kurser
      processedCourses = processedCourses.filter(course =>

        //Söker efter kurskod eller kursnamn
        course.courseCode.toLowerCase().includes(filter) ||
        course.courseName.toLowerCase().includes(filter)

      );
    }

    //// FILTERING VIA ÄMNE ///

    //Kontrollerar om användaren valt ämne
    if (subjectFilter) {
      //Filtrerar kurser efter ämne
      processedCourses = processedCourses.filter(course =>
        //Jämför en kurs ämne med valt ämne
        course.subject === subjectFilter

      
    }

    //Returnerar filtrerade kurser
    return processedCourses;

  });

///  SKAPA LISTA MED UNIKA ÄMNEN ///

  //Computed signal för unika ämnen
  subjects = computed(() => {

    //Hämtar alla ämnen från kursarray
    const allSubjects = this.courses().map(course => course.subject);

    //Tar bort dubletter. Gör ämnen unika
    const uniqueSubjects = [...new Set(allSubjects)];

    //Sorterar ämnen i alfabetisk ordning
    uniqueSubjects.sort();

    //Returnerar färdig lista med unika ämnen
    return uniqueSubjects;

  });


  ////// HÄMTAR DATA VIA SERVICE //////

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

