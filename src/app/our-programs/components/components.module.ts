import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramsComponent} from "../../programs/programs.component";

const ourProgramsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...ourProgramsComponents],
  imports: [
    CommonModule,
  ],
  exports: [...ourProgramsComponents],
})
export class ComponentsModule { }
