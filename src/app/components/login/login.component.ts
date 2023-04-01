import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {FacebookLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {Observable, switchMap} from "rxjs";
import {UserService} from "../../services/user-service/user.service";

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

  constructor(private socialAuthService: SocialAuthService, private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService, private userService: UserService) {
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
        if (user.provider === "GOOGLE") {
          this.doLogin(
            () => this.authService.googleLogin(this.user.idToken)
          );
        } else if (user.provider === "FACEBOOK") {
          this.doLogin(
            () => this.authService.facebookLogin(this.user.authToken)
          );
        }
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
    this.submitted = true;

    if (this.loginFormGroup.invalid) {
      return;
    }

    const email = this.loginFormGroup.value.email;
    const password = this.loginFormGroup.value.password;

    this.doLogin(() => this.authService.login(email, password));
  }

  private doLogin(loginFn: () => Observable<any>) {
    loginFn().pipe(
      switchMap(data => {
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveRefreshToken(data.refreshToken);

        // Fetch the user details after storing the tokens
        return this.userService.getCurrentUser();
      })
    ).subscribe(
      user => {
        this.tokenStorageService.setCurrentUser(user);
        this.socialAuthService.signOut();
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }


  signInWithFB() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
