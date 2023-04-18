import {NgModule} from '@angular/core';
import {TrainerProgramsComponent} from "./trainer-programs.component";
import {SharedModule} from "../../../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [TrainerProgramsComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [TrainerProgramsComponent]
})
export class TrainerProgramsModule {
}
