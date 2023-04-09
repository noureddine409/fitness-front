import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
const ourServicesComponents: Type<any>[] = [];


@NgModule({
  declarations: [...ourServicesComponents],
  imports: [
    CommonModule
  ],
  exports:[...ourServicesComponents]
})
export class ComponentsModule { }
