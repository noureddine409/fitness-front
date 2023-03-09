import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { OurProgramsComponent } from './components/our-programs/our-programs.component';
import { OurTrainersComponent } from './components/our-trainers/our-trainers.component';
import { PopularProgramsComponent } from './components/popular-programs/popular-programs.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramComponent } from './components/program/program.component';
import { RegisterComponent } from './components/register/register.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WhatPeopleSayComponent } from './components/what-people-say/what-people-say.component';
import { AppRoutingModule } from './app-routing.module';

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
    WhatPeopleSayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
