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
import {StatisticsComponent} from './components/statistics/statistics.component';
import {WhatPeopleSayComponent} from './components/what-people-say/what-people-say.component';
import {AppRoutingModule} from './app-routing.module';
import {MultiStepFormComponent} from './components/multi-step-form/multi-step-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./services/registration/registration.service";
import {HttpClientModule} from "@angular/common/http";
import {AlertComponent} from './components/alert/alert.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';
import {environment} from "./environements/environements";

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
    StatisticsComponent,
    WhatPeopleSayComponent,
    MultiStepFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
//...

  ],
  providers: [RegistrationService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.google_id
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
