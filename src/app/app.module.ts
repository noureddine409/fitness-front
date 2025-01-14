import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./@core/services/registration/registration.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';
import {environment} from "../environements/environements";
import {AuthInterceptor} from "./@core/interceptor/auth.interceptor";
import {RouterModule} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {OurServicesItemsModule} from "./our-services-items/our-services-items.module";
import {OurProgramsModule} from "./our-programs/our-programs.module";
import {BlogsModule} from "./blogs/blogs.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {LayoutModule} from "./layout/layout.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {WatchProgramModule} from "./watch-program/watch-program.module";
import {OurTrainersModule} from "./our-trainers/our-trainers.module";
import {JoinUsModule} from "./join-us/join-us.module";
import {CompleteOrderComponent} from './complete-order/complete-order.component';
import {CommonModule} from "@angular/common";
import {ProgramDetailsModule} from "./program-details/program-details.module";
import {ContactModule} from "./contact/contact.module";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    CompleteOrderComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        RouterModule.forRoot([]),
        HomeModule,
        OurServicesItemsModule,
        OurProgramsModule,
        OurTrainersModule,
        BlogsModule,
        AuthenticationModule,
        LayoutModule,
        DashboardModule,
        WatchProgramModule,
        JoinUsModule,
        ProgramDetailsModule,
        ContactModule,
        ProfileModule,
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
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //
}
