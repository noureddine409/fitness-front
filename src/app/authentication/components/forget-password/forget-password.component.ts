import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../@core/services/authentication/auth.service";
import {ALERT_MESSAGES} from "../../../@shared/constants";
import {getErrorMessages} from "../../../utils/validation.util";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordFormGroup!: FormGroup;

  errorMessage = "";

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.forgetPasswordFormGroup = this.formBuilder.group(
      {
        email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      }
    )
  }

  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }

  handleForgetPassword() {
    this.submitted = true

    if (this.forgetPasswordFormGroup.invalid) {
      return
    }

    const email = this.forgetPasswordFormGroup.value.email;

    this.authService.forgetPassword({email: email}).subscribe(
      value => {
        this.router.navigate(["/forget-password-email"])
      },
      error => {
        if (error.status === 404) {
          this.errorMessage = ALERT_MESSAGES.FORGET_PASSWORD.NOT_FOUND;
        } else {
          this.errorMessage = ALERT_MESSAGES.FORGET_PASSWORD.ERROR;
        }
      }
    )

  }
}
