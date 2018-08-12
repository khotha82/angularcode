import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private _coursesList;

  constructor(service:CoursesService) {
    this._coursesList=service.getCourses();
   }

  ngOnInit() {
  }

  get coursesList(){
    return this._coursesList;
  }

}
