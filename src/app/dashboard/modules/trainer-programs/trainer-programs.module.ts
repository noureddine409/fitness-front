import {NgModule} from '@angular/core';
import {TrainerProgramsComponent} from "./trainer-programs.component";
import {SharedModule} from "../../../@shared/shared.module";
import {TrProgramsComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [TrainerProgramsComponent],
  imports: [
    SharedModule,
    TrProgramsComponentsModule
  ],
  exports: [TrainerProgramsComponent]
})
export class TrainerProgramsModule {
}
