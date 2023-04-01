import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authentication/auth.service";
import {ERROR_MESSAGES, RESET_TOKEN_KEY} from "../../constants/constants";
import {Router} from "@angular/router";
import {Token} from "../../models/token.model";

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
        password: this.formBuilder.control(null, Validators.required),
        confirmPassword: this.formBuilder.control(null, [Validators.required, this.matchPassword.bind(this)]),
      }
    )
  }

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    return password && control.value !== password.value ? {'mismatch': true} : null;
  }

  getErrorMessage(errors: any) {
    const messages = [];
    if (errors) {
      if (errors.required) {
        messages.push('Please fill out this field.');
      }
      if (errors.email) {
        messages.push('Email must be a well-formed email address.');
      }

      if (errors.mismatch) {
        messages.push('Confirm Password does not match');
      }

    }
    return messages;
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
        this.errorMessage = ERROR_MESSAGES.FORGET_PASSWORD.RESET_ERROR;
      }
    )



  }
}
