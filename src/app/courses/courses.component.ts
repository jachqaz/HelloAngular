import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  text = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. AENEAN COMMODO LIGULA EGET DOLOR. AENEAN MASSA.
CUM SOCIIS NATOQUE PENATIBUS ET MAGNIS DIS PARTURIENT MONTES, NASCETUR RIDICULUS MUS. DONEC QUAM FELIS, ULTRICIES NEC,
PELLENTESQUE EU, PRETIUM QUIS, SEM. NULLA CONSEQUAT MASSA QUIS ENIM. DONEC PEDE JUSTO, FRINGILLA VEL, ALIQUET NEC,
VULPUTATE EGET, ARCU. IN ENIM JUSTO, RHONCUS UT, IMPERDIET A, VENENATIS VITAE, JUSTO. NULLAM DICTUM FELIS EU PEDE MOLLIS PRETIUM.
INTEGER TINCIDUNT. CRAS DAPIBUS. VIVAMUS ELEMENTUM SEMPER NISI. AENEAN VULPUTATE ELEIFEND TELLUS. AENEAN LEO LIGULA, PORTTITOR EU,
 CONSEQUAT VITAE, ELEIFEND AC, ENIM. ALIQUAM LOREM ANTE, DAPIBUS IN, VIVERRA QUIS, FEUGIAT A, TELLUS.
 PHASELLUS VIVERRA NULLA UT METUS VARIUS LAOREET. QUISQUE RUTRUM. AENEAN IMPERDIET. ETIAM ULTRICIES NISI VEL AUGUE.
 CURABITUR ULLAMCORPER ULTRICIES NISI. NAM EGET DUI. ETIAM RHONCUS. MAECENAS TEMPUS, TELLUS EGET CONDIMENTUM RHONCUS,
 SEM QUAM SEMPER LIBERO, SIT AMET ADIPISCING SEM NEQUE SED IPSUM. NAM QUAM NUNC, BLANDIT VEL, LUCTUS PULVINAR, HENDRERIT ID, LOREM.
  MAECENAS NEC ODIO ET ANTE TINCIDUNT TEMPUS. DONEC VITAE SAPIEN UT LIBERO VENENATIS FAUCIBUS. NULLAM QUIS ANTE.
   ETIAM SIT AMET ORCI EGET EROS FAUCIBUS TINCIDUNT. DUIS LEO. SED FRINGILLA MAURIS SIT AMET NIBH. DONEC SODALES SAGITTIS MAGNA.
    SED CONSEQUAT, LEO EGET BIBENDUM SODALES, AUGUE VELIT CURSUS NUNC,`;
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
