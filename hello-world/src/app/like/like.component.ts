import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input() isLiked=false;
  @Input() count;
  constructor() { }

  onClick(){
    
    this.isLiked=!this.isLiked;
    this.count=this.isLiked?1:0;
    console.log('button clicke'+this.isLiked + this.count);
  }

}
