import {NgModule} from '@angular/core';
import {ProgramsComponent} from "./programs.component";
import {ProgramsComponentsModule} from "./components/components.module";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    SharedModule,
    ProgramsComponentsModule
  ],
  exports: [ProgramsComponent]
})
export class ProgramsModule {
}
