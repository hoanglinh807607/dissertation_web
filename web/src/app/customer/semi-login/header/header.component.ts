import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {MenuProfile} from '../layout/semi.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  isUrlLogin = false;
  @ViewChild('modalMenu') private modalMenu: TemplateRef<any>;
  @Input() drawer: MatSidenav;
  @Input() menuProfiles: MenuProfile[];
  profilePicture = false;
  number = 0;
  text: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === "/app/auth/login") this.isUrlLogin = true;
  }

  openDialogMenu() {
    this.drawer.toggle();
  }

  navigateUrl(url: string | undefined) {
    this.router.navigate([url]);
  }
}
