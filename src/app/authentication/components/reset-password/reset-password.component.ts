import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../@core/services/authentication/auth.service";
import {ALERT_MESSAGES, RESET_TOKEN_KEY} from "../../../@shared/constants";
import {Router} from "@angular/router";
import {Token} from "../../../@core/models/token.model";
import {getErrorMessages, matchPassword, passwordValidator} from "../../../utils/validation.util";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  errorMessage = "";

  resetPasswordFormGroup!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.resetPasswordFormGroup = this.formBuilder.group(
      {
        password: this.formBuilder.control(null,[ Validators.required, passwordValidator()]),
        confirmPassword: this.formBuilder.control(null, [Validators.required, matchPassword.bind(this)]),
      }
    )
  }

  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }


  handleResetPassword() {
    this.submitted = true

    if(this.resetPasswordFormGroup.invalid){
      return
    }

    let password = this.resetPasswordFormGroup.value.password
    const strResetToken = localStorage.getItem(RESET_TOKEN_KEY)
    if(strResetToken == null) {
      this.router.navigate(["/error-404"])
      return;
    }
    let token: Token = JSON.parse(strResetToken);
    this.authService.resetPassword(token.token, password).subscribe(
      value => {
        localStorage.removeItem(RESET_TOKEN_KEY);
        this.router.navigate(["/login"])
      },
      error => {
        this.errorMessage = ALERT_MESSAGES.FORGET_PASSWORD.RESET_ERROR;
      }
    )



  }
}
