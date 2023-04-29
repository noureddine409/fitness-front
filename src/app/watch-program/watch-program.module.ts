import {NgModule} from '@angular/core';
import {WatchProgramComponent} from "./watch-program.component";
import {ComponentsModule} from "./components/components.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
  declarations: [WatchProgramComponent],
  imports: [
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [WatchProgramComponent]
})
export class WatchProgramModule {
}
