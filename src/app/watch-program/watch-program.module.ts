import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WatchProgramComponent} from "./watch-program.component";
import {ComponentsModule} from "./components/components.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [WatchProgramComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  exports:[WatchProgramComponent]
})
export class WatchProgramModule { }
