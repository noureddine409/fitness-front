import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramComponent} from "./program/program.component";


const programsComponents: Type<any>[] = [ProgramComponent];
@NgModule({
  declarations: [...programsComponents],
  imports: [
    CommonModule
  ],
  exports:[...programsComponents]
})
export class ComponentsModule { }
