import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';

const programDetailsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...programDetailsComponents],
  imports: [
    CommonModule
  ],
  exports:[...programDetailsComponents]
})

export class ComponentsModule { }
