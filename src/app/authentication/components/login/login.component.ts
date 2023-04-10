import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FacebookLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {Observable, switchMap} from "rxjs";
import {AuthService} from "../../../@core/services/authentication/auth.service";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {UserService} from "../../../@core/services/user-service/user.service";
import {getErrorMessages} from "../../../utils/validation.util";
import {ALERT_MESSAGES} from "../../../@shared/constants";

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

  goToOtherComponent(url:string) {
    this.router.navigate([url]);
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
    return getErrorMessages(errors);
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
        if (error.status === 401) {
          this.errorMessage = ALERT_MESSAGES.LOGIN.BAD_CREDENTIALS;
        } else {
          this.errorMessage = ALERT_MESSAGES.LOGIN.ERROR;
        }
      }
    );
  }


  signInWithFB() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
