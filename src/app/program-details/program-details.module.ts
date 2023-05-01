import {NgModule} from '@angular/core';
import {ProgramDetailsComponent} from './program-details.component';
import {ComponentsModule} from "./components/components.module";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../@shared/shared.module";

@NgModule({
  declarations: [
    ProgramDetailsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ComponentsModule
  ],
  exports: [ProgramDetailsComponent]
})
export class ProgramDetailsModule {
}
