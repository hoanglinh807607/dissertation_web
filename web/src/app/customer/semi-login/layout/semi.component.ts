import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

export interface MenuProfile {
  path: string;
  icon: string;
  name?: string;
}

@Component({
  selector: 'app-semi',
  templateUrl: './semi.component.html',
  styleUrls: ['./semi.component.scss']
})
export class SemiComponent implements OnInit {

  menuProfiles: MenuProfile[] = [
    {path: "/app/me/bookings", icon: "date_range", name: "Đặt chỗ của tôi"},
    {path: "/app/me/messages", icon: "mail_outline", name: "Tin nhắn"},
    {path: "/app/me/wish-list", icon: "favorite_border", name: "Yêu thích"},
    {path: "/app/me/settings", icon: "settings", name: "Cài đặt tài khoản"},
    {path: "/app/me/bookings", icon: "power_settings_new", name: "Đăng xuất"}
  ];
  @ViewChild('drawer') drawer: MatSidenav;
  profilePicture = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateUrl(url: string | undefined) {
    this.router.navigate([url]);
  }

}
