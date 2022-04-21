import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-post-login',
  templateUrl: './layout-post-login.component.html',
  styleUrls: ['./layout-post-login.component.scss']
})
export class LayoutPostLoginComponent implements OnInit {

  profilePicture = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateUrl(url: string) {
    this.router.navigate([url]);
  }
}
