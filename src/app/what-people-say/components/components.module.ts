import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';

const whatPeopleSayComponents: Type<any>[] = [];

@NgModule({
  declarations: [...whatPeopleSayComponents],
  imports: [
    CommonModule
  ],
  exports:[...whatPeopleSayComponents]
})
export class ComponentsModule { }
