import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurProgramsComponent} from "./our-programs.component";
import {ComponentsModule} from "./components/components.module";
import {ProgramsModule} from "../programs/programs.module";


@NgModule({
  declarations: [OurProgramsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ProgramsModule
  ],
  exports: [OurProgramsComponent]
})
export class OurProgramsModule {
}
