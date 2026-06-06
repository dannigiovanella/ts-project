
// SERVICE FÖR ATT HANTERA KURLISTA (json-fil)

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//Observable används för att hantera asynkron data
import { Observable } from 'rxjs';

//Importerar interface för kursdata
import { CourseInterface } from '../models/course-interface';

@Injectable({
  providedIn: 'root',
})

///// SERVICE ////

//Klass för hantering av kursdata
export class CourseService {

  //lokal json-fil
  private url = '/miun_courses.json';

  //Använder inject istället för constructor för att få tillgång till httpclient
  http = inject(HttpClient);

  //Metod för att hämta kurser
  //Hämtar kurser i en array från url och returnerar en observable då datan kommer asynkront
  getCourses(): Observable<CourseInterface[]> {

    //http GET anrop mot json filen
    return this.http.get<CourseInterface[]>(this.url);

  }

}