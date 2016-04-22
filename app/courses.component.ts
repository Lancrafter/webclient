import {Component} from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Component, View, bootstrap} from 'angular2/angular2';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {CourseService} from './course.service';

@Component({
    selector: 'lc-courses',
    templateUrl: 'lc-courses.html',
    styleUrls: ['./css/lc-courses.css'],
    directives: [ BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, Alert ],
    providers: [CourseService]
})
export class CoursesComponent {
    elementRef: ElementRef;

    constructor(courseService : CourseService){
      this.courses = courseService.getCourses();
    }
}
