import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  contactMethod = [
    {id: 1, method: 'email'},
    {id: 2, method: 'phone'}
  ];
  days = [{id: 1, day: 'sunday'},
  {id: 2, day: 'monday'},
  {id: 3, day: 'tuesday'}

]
  constructor() { }

  log(model) {
    console.log(model);
  }
  onSubmit(f) {
    console.log(f);
  }
}
