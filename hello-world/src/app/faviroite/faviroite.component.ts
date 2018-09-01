import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-isFavortie',
  templateUrl: './faviroite.component.html',
 
  styles : [`
  .glyphicon {
    font-size: 100px;
    color: blue
}
styleUrls: ['./faviroite.component.css'],

  `],
  encapsulation: ViewEncapsulation.Emulated
  
})
export class FaviroiteComponent implements OnInit {

  @Input("is-Favortie") isFavortie;
  @Output() change=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavortie=!this.isFavortie;
    this.change.emit({isFav:this.isFavortie,title:'fuckyou'});
  }

}
export interface ArgsInter{

  isFav:boolean;
  title: String;
}