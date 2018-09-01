import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FaviroiteComponent } from './faviroite/faviroite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchtestComponent } from './switchtest/switchtest.component';
import { NgfortestComponent } from './ngfortest/ngfortest.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FaviroiteComponent,
    PanelComponent,
    LikeComponent,
    DirectivesComponent,
    SwitchtestComponent,
    NgfortestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
