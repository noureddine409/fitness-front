import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyProgramComponent } from './modify-program.component';
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [
    ModifyProgramComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[ModifyProgramComponent]
})
export class ModifyProgramModule { }
