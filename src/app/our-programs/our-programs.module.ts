import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurProgramsComponent} from "./our-programs.component";
import {ComponentsModule} from "./components/components.module";
import {ProgramsModule} from "../programs/programs.module";
import {ProgramsComponentsModule} from "../programs/components/components.module";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
  declarations: [OurProgramsComponent],
  imports: [
    SharedModule,
    ComponentsModule,
    ProgramsComponentsModule
  ],
  exports: [OurProgramsComponent]
})
export class OurProgramsModule {
}
