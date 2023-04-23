import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";
import {ModifyProgramComponent} from "./modify-program.component";



@NgModule({
  declarations: [ModifyProgramComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [ModifyProgramComponent]
})
export class ModifyProgramModule { }
