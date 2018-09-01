import { Component } from '@angular/core';

@Component({
  selector: 'app-switchtest',
  templateUrl: './switchtest.component.html',
  styleUrls: ['./switchtest.component.css']
})
export class SwitchtestComponent  {

  viewMode='list';
  constructor() { }


  changeMode(mode){
    console.log(mode);
    this.viewMode=mode;
  }

}
