//Interface för kursinformation
//Visar hur varje kursobjekt ska se ut (baserat på api)

export interface CourseInterface {

    courseCode: string;
    courseName: string;
    points: number;
    subject: string;
    syllabus: string;

}