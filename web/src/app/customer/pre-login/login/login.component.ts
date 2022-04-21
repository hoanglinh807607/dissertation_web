import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../../../shared/helper/constants";
import {UserService} from "../../../core/service/user.service";
import {AuthService} from "../../../core/service/auth.service";
import {filter, startWith, Subject, switchMap, take, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  formSubmit$ = new Subject();

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      emailAddress: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(Constants.REGEX_USERNAME)
        ]),
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(Constants.REGEX_PASSWORD)
        ])
      ]
    })
  }

  triggerSubmitForm() {
    this.formSubmit$
      .pipe(
        tap(() => this.formGroup.markAsDirty()),
        switchMap(() =>
          this.formGroup.statusChanges.pipe(
            startWith(this.formGroup.status),
            filter((status) => status !== "PENDING"),
            take(1)
          )
        ),
        filter((status) => status === "VALID")
      )
      .subscribe((validationSuccessful) => this.submitForm());
  }

  submitForm() {
  }
}
