import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  private _authorList;
  constructor(aservice:AuthorsService) { 
    this._authorList=aservice.getAuthors();
  }

  ngOnInit() {
  }

  get authorList(){
    return this._authorList;
  }
}
