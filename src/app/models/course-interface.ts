//Interface för kursinformation
//Visar hur varje kursobjekt ska se ut (baserat på api)

export interface CourseInterface {

    courseCode: string;
    subjectCode: string;
    level: string;
    progression: string;
    courseName: string;
    points: number;
    institutionCode: string;
    subject: string;
    syllabus: string;

}