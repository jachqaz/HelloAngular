import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of course';
  courses;

  // Logic for calling an HTTP service
  constructor() {
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }
}
