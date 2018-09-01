import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfortest',
  templateUrl: './ngfortest.component.html',
  styleUrls: ['./ngfortest.component.css']
})
export class NgfortestComponent  {

  courses=[
    {id:1,name:'course1'},
    {id:1,name:'course2'},
    {id:1,name:'course3'},
    {id:1,name:'course4'},
    {id:1,name:'course5'}

  ]

  constructor() { }

  add(){
    let test:number = this.courses.length;
    this.courses.push({id:test+1,name:'course'+test});
  }

  remove(course){
    let ind=this.courses.indexOf(course);
    console.log(ind);
    this.courses.splice(ind,1);

  }

}
