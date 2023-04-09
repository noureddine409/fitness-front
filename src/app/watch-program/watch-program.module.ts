import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchProgramComponent} from "./watch-program.component";
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [WatchProgramComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[WatchProgramComponent]
})
export class WatchProgramModule { }
