import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of course';
  courses = ['course1', 'course2', 'course3'];
  constructor() {
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }
}
