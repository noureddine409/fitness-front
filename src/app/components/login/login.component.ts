import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {TokenRequest} from "../../models/token-request.model";

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

  user!: any;
  loggedIn!: boolean;

  constructor(private socialAuthService: SocialAuthService, private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group(
      {
        email: this.formBuilder.control(null, [Validators.required, Validators.email]),
        password: this.formBuilder.control(null, Validators.required)
      }
    )

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.authService.googleLogin(this.user.idToken).subscribe(
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
    });
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
