import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.abc);
  }

  get abc() {
    return 3;
  }

  get ec() {
    return 2;
  }

}
