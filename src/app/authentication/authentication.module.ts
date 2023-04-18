import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivateAccountComponent} from "./components/activate-account/activate-account.component";
import {CompleteProfileFormComponent} from "./components/complete-profile/complete-profile-form.component";
import {ErrorComponent} from "./components/error/error.component";
import {ForgetPasswordComponent} from "./components/forget-password/forget-password.component";
import {ForgetPasswordVerifyComponent} from "./components/forget-password-verify/forget-password-verify.component";
import {ForgetPasswordMailComponent} from "./components/forget-password-mail/forget-password-mail.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RegisterComponent} from "./components/register/register.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {VerifyAccountComponent} from "./components/verify-account/verify-account.component";
import {ReactiveFormsModule} from "@angular/forms";
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";
import {SharedModule} from "../@shared/shared.module";

const authenticationComponents: Type<any>[] = [ActivateAccountComponent, CompleteProfileFormComponent, ErrorComponent, ForgetPasswordComponent, ForgetPasswordVerifyComponent, ForgetPasswordMailComponent, LoginComponent, ProfileComponent, RegisterComponent, ResetPasswordComponent, VerifyAccountComponent];


@NgModule({
  declarations: [...authenticationComponents],
  imports: [
    SharedModule,
    GoogleSigninButtonModule
  ],
  exports: [...authenticationComponents]
})
export class AuthenticationModule {
}
