import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {NavbarHeaderService} from "../../../services/navbar-header-service.service";
import {authQuery} from "../../../core/store/auth/auth.selector";
import {takeUntil} from "rxjs";
import {Destroyable} from "../../../shared/provider/directive/destroyable.directive";
import {LOGIN, login} from "../../../core/store/auth/auth.actions";
import {IObject} from "../../../api/Interface.Utils";

export enum ACTION_LOGIN {
  LOGIN, FORGOT_PASSWORD, SIGNUP
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Destroyable implements OnInit {

  actionLogin = ACTION_LOGIN.LOGIN;
  ACTION_LOGIN = ACTION_LOGIN;
  isShowPassword = false;
  form = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  formErrors: IObject = {};


  constructor(
    private authApi: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store,
    private activateRoute: ActivatedRoute,
    private navHeaderService: NavbarHeaderService
  ) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(login());
  }

  clickForgotPassword() {
    this.actionLogin = ACTION_LOGIN.FORGOT_PASSWORD;
  }

  clickSignup() {
    this.actionLogin = ACTION_LOGIN.SIGNUP;
  }

}
