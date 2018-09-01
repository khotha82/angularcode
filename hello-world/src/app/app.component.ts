import { ArgsInter } from './faviroite/faviroite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-hello-world';
  post={
    title: "abc",
    isFavorite :false
  }
  tweet={
    body: 'this is body of the post',
    isLiked: false,
    count: 0
  }
  onFavChnage(isFavortie:ArgsInter){
    console.log('changed'+isFavortie.isFav+" "+isFavortie.title);
  }
}
