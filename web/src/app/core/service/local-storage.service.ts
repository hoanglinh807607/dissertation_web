import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {LocationSearching} from '../models/locationSearching';
import {UserModel} from "../models/userModel";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageSub$ = new Subject();

  constructor(private router: Router) { }

  watchStorage(): Observable<any> {
    return this.storageSub$.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub$.next(true);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setLocationSearching(locationSearching: LocationSearching) {
    localStorage.setItem('locationSearching', JSON.stringify(locationSearching));
  }

  getLocationSearching(): LocationSearching {
    const locationsearching = JSON.parse(<string> localStorage.getItem('locationSearching'));
    return new LocationSearching().deserialize(locationsearching);
  }

  getListPictureUrl(): string[] {
    const pictures = JSON.parse(<string>localStorage.getItem('pictures'));
    return pictures ?? [];
  }

  setListPictureUrls(pictures: string[]) {
    localStorage.setItem('pictures', JSON.stringify(pictures));
  }

  removeListPictureUrls() {
    localStorage.removeItem('pictures');
  }

  getPicture(): string {
    const picture = localStorage.getItem('picture');
    return picture ?? '';
  }

  setPicture(picture: string) {
    localStorage.setItem('picture', picture);
  }

  returnPicture() {
    localStorage.removeItem('picture');
  }

  setLoginInfo(loginInfo: UserModel) {
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }

  getLoginInfo(): UserModel {
    const loginInfo = JSON.parse(<string> localStorage.getItem('loginInfo'))
    if (!loginInfo) {
      this.doLogout();
    }
    return loginInfo;
  }

  removeLoginInfo() {
    localStorage.removeItem('loginInfo');
  }

  isUserLoggend(): boolean {
    const isUserLogged = localStorage.getItem('token');
    return Boolean(isUserLogged);
  }

  doLogout() {
    localStorage.removeItem('token');
    this.removeLoginInfo()
    this.router.navigate(['/app/auth/login']);
  }

}
