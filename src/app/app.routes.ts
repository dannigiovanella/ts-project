import { Routes } from '@angular/router';

//Importerar komponenter
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { MyCourses } from './pages/my-courses/my-courses';
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
    path: "mycourses", component: MyCourses
  },
  {
    path: "details", component: CourseDetails
  },
  {
    path: "**", component: NotFound
  }
]; 

