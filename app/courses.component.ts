import { Component } from '@angular/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
  providers: [CourseService]
})

export class CoursesComponent {
  title = "The title of courses page"
  courses
    // Dependency injection, this is also nice and modular for unit testing
  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses()
  }
}
