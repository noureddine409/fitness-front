import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {ERROR_MESSAGES} from "../../constants/constants";

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
    const messages = [];
    if (errors) {
      if (errors.required) {
        messages.push('Please fill out this field.');
      }
      if (errors.email) {
        messages.push('Email must be a well-formed email address.');
      }
    }
    return messages;

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
          this.errorMessage = ERROR_MESSAGES.FORGET_PASSWORD.NOT_FOUND;
        } else {
          this.errorMessage = ERROR_MESSAGES.FORGET_PASSWORD.ERROR;
        }
      }
    )

  }
}
