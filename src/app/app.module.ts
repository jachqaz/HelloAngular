import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {PanelComponent} from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
