import {NgModule, Type} from '@angular/core';
import {ProgramCardComponent} from "./program-card/program-card.component";
import {SharedModule} from "../../../../@shared/shared.module";

export const TrainerProgramsComponents: Type<any>[] = [ProgramCardComponent];

@NgModule({
  declarations: [...TrainerProgramsComponents],
  imports: [
    SharedModule
  ],
  exports: [...TrainerProgramsComponents]
})
export class TrProgramsComponentsModule {
}
