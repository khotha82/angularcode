import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {

  @Input()title='abc';
  isExpended:boolean=false;
  constructor() { }

  toggle(){
    console.log('tooole')
    this.isExpended=!this.isExpended;
  }

  

}
