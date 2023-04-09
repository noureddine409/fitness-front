import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramsComponent} from "./programs.component";
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[ProgramsComponent]
})
export class ProgramsModule { }
