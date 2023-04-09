import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';


const contactComponents: Type<any>[] = [];
@NgModule({
  declarations: [...contactComponents],
  imports: [
    CommonModule
  ],
  exports: [...contactComponents],
})
export class ComponentsModule { }
