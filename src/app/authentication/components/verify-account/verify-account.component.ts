import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../@core/services/authentication/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {UserService} from "../../../@core/services/user-service/user.service";

@Component({
  selector: 'app-verfy-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {
  isLoading = true;
  isVerified = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private tokenStorageService: TokenStorageService, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let verificationCode = params['code'];
      this.doLogin(() => this.authService.verifyAccount(verificationCode))
    });
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
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }


}
