import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';

const popularProgramsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...popularProgramsComponents],
  imports: [
    CommonModule
  ],
  exports:[...popularProgramsComponents]
})
export class ComponentsModule { }
