import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsComponent } from './program-details.component';
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [
    ProgramDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[ProgramDetailsComponent]
})
export class ProgramDetailsModule { }
