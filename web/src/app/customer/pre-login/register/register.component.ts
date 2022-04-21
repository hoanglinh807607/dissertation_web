import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Constants} from "../../../shared/helper/constants";
import {filter, Observable, startWith, Subject, switchMap, take, tap, timer} from "rxjs";
import {UserService} from "../../../core/service/user.service";
import {AuthService} from "../../../core/service/auth.service";
import {CustomValidators} from "../../../api/validator";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  formSubmit$ = new Subject();
  isShowPassword = false;
  isShowNewPasswordConfirm = false;
  submited = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    this.triggerSubmitForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      emailAddress: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(45),
          Validators.email,
          Validators.pattern(Constants.REGEX_EMAIL)
        ]),
        this.validateUserNameFromAPIDebounce.bind(this)
      ],
      phoneNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15),
          Validators.pattern(Constants.NUMBER_ONLY)
        ])
      ],
      fullName: ["", Validators.required, Validators.maxLength(45)],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(Constants.REGEX_PASSWORD)
        ]),
      ],
      newPasswordConfirm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(Constants.REGEX_PASSWORD)
        ]),
      ]
    },
      {
      validators: CustomValidators.validateControlsValue("password", "newPasswordConfirm")
      }
    )
  }

  triggerSubmitForm() {
    this.formSubmit$
      .pipe(
        tap(() => {
          this.formGroup.markAllAsTouched();
          this.submited = true;
          if(this.formGroup.invalid) {
            // Got focus to the error field
            const formGroupInvalid = document.querySelectorAll('.ng-invalid');
            (<HTMLInputElement>formGroupInvalid[1]).focus();
          }
        }),
        switchMap(() =>
          this.formGroup.statusChanges.pipe(
            tap((status) => {console.log(status)}),
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
    console.log('adada');
  }

  clickShowNewPasswordConfirm() {
    this.isShowNewPasswordConfirm = !this.isShowNewPasswordConfirm;
  }

  clickShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  validateUserNameFromAPIDebounce(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return timer(700).pipe(
      switchMap(() =>
        this.userService.validateUsername(control.value as string).pipe(
          map(isValid => {
            return isValid ? null : { usernameDuplicated: true };
          })
        )
      )
    );
  }

  validateControl(nameControl: string): boolean {
    return Boolean(this.formGroup.get(nameControl)?.errors && (this.formGroup.get(nameControl)?.touched || this.submited));
  }
}
