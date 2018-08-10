import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of course';
  courses;
  imageUrl = 'http://dragonball.sullca.com/wp-content/uploads/2015/07/Dragon-Ball-Super-online.jpg';
  colSpan = 2;
  isActive = true;

  onSave($event) {
    $event.stopPropagation();
    alert('Button was clicked' + $event);
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

  onDivcClicked() {
    alert('Div was clicked');
  }

  onKeyUp() {
    alert('Enter was pressed');
  }
}
