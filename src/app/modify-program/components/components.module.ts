import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';



const modifyProgramComponents: Type<any>[] = [];

@NgModule({
  declarations: [...modifyProgramComponents],
  imports: [
    CommonModule
  ],
  exports:[...modifyProgramComponents]
})

export class ComponentsModule { }
