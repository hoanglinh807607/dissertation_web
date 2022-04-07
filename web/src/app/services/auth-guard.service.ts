import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const isUserLogged = localStorage.getItem('token');
    if (!isUserLogged) {
      localStorage.setItem('returnUrl', state.url);
      this.router.navigate(['app/auth/login']);
      return false;
    }
    return true;
  }
}
