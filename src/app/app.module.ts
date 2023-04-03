import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {MainSliderComponent} from './components/main-slider/main-slider.component';
import {OurProgramsComponent} from './components/our-programs/our-programs.component';
import {OurTrainersComponent} from './components/our-trainers/our-trainers.component';
import {PopularProgramsComponent} from './components/popular-programs/popular-programs.component';
import {ProgramsComponent} from './components/programs/programs.component';
import {ProgramComponent} from './components/program/program.component';
import {RegisterComponent} from './components/register/register.component';
import {WhatPeopleSayComponent} from './components/what-people-say/what-people-say.component';
import {AppRoutingModule} from './app-routing.module';
import {CompleteProfileFormComponent} from './components/complete-profile/complete-profile-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./services/registration/registration.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AlertComponent} from './components/alert/alert.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';
import {environment} from "./environements/environements";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressRouterModule} from "@ngx-progressbar/router";
import {RouterModule} from "@angular/router";
import { ForgetPasswordMailComponent } from './components/forget-password-mail/forget-password-mail.component';
import { ForgetPasswordVerifyComponent } from './components/forget-password-verify/forget-password-verify.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ErrorComponent } from './components/error/error.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurServicesItemsComponent } from './components/our-services-items/our-services-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    LoginComponent,
    MainSliderComponent,
    OurProgramsComponent,
    OurTrainersComponent,
    PopularProgramsComponent,
    ProgramsComponent,
    ProgramComponent,
    RegisterComponent,
    WhatPeopleSayComponent,
    CompleteProfileFormComponent,
    AlertComponent,
    ProfileComponent,
    ActivateAccountComponent,
    VerifyAccountComponent,
    ForgetPasswordMailComponent,
    ForgetPasswordVerifyComponent,
    ResetPasswordComponent,
    ErrorComponent,
    OurServicesComponent,
    OurServicesItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    RouterModule.forRoot([]),
//...

  ],
  providers: [RegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.google_id,
              {
                oneTapEnabled: false
              }
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.facebook_id),
          },
        ],
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
