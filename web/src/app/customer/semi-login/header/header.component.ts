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

  isLogin = true;
  isUrlLogin = false;
  @ViewChild('modalMenu') private modalMenu: TemplateRef<any>;
  @Input() drawer: MatSidenav;
  @Input() menuProfiles: MenuProfile[];
  profilePicture = false;
  number = 0;
  text: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.url === "/app/auth/login" ? this.isLogin = true : this.isLogin = false;
  }

  openDialogMenu() {
    this.drawer.toggle();
  }

  navigateUrl(url: string) {
    if (url) {
      this.router.navigate([url]);
    }
  }
}
