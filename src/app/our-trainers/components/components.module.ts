import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';

const ourTrainersComponents: Type<any>[] = [];

@NgModule({
  declarations: [...ourTrainersComponents],
  imports: [
    CommonModule
  ],
  exports:[...ourTrainersComponents]
})
export class ComponentsModule { }
