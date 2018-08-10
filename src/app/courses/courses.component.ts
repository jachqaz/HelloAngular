import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    relaseDate: new Date(2016, 3, 1)
  };
  title = 'List of course';
  courses;
  imageUrl = 'http://dragonball.sullca.com/wp-content/uploads/2015/07/Dragon-Ball-Super-online.jpg';
  colSpan = 2;
  isActive = true;

  email = 'me@example.com';

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
    alert(this.email);
  }
}
