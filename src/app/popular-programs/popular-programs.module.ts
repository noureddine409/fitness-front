import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {PopularProgramsComponent} from "./popular-programs.component";



@NgModule({
  declarations: [PopularProgramsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[PopularProgramsComponent]
})
export class PopularProgramsModule { }
