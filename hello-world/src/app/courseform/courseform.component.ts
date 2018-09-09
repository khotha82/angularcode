import { Component } from '@angular/core';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent {

  constructor() { }

  courseCategory = [
    {id: 1, type : 'art'},
    {id: 2, type : 'Development'},
    {id: 3, type : 'Langs'}
  ];

  log(model){
    console.log(model);
  }
}
