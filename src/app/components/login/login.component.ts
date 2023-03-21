import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = ""
  loginFormGroup!: FormGroup;

  submitted = false;

  isLoginFailed = false

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group(
      {
        email: this.formBuilder.control(null, [Validators.required, Validators.email]),
        password: this.formBuilder.control(null, Validators.required)
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

  handleLogin() {

    this.submitted = true

    if (this.loginFormGroup.invalid) {
      return
    }
    let email = this.loginFormGroup.value.email
    let password = this.loginFormGroup.value.password

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.accessToken.token);
        this.tokenStorageService.saveRefreshToken(data.refreshToken.token)
      },
      error => {
        this.errorMessage = error.message;
        this.isLoginFailed = true;
      }
    )


  }
}
