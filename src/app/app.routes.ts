import { Routes } from '@angular/router';

//Importerar komponenter
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { Schedule } from './pages/schedule/schedule';
import { CourseDetails } from './pages/course-details/course-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
     {
    path: "", component: Home
  },
  {
    path: "courses", component: Courses
  },
  {
    path: "schedule", component: Schedule
  },
  {
    path: "details", component: CourseDetails
  },
  {
    path: "**", component: NotFound
  }
]; 

