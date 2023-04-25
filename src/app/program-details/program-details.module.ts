import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsComponent } from './program-details.component';
import {ComponentsModule} from "./components/components.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    ProgramDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule
  ],
  exports:[ProgramDetailsComponent]
})
export class ProgramDetailsModule { }
