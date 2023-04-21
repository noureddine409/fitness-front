import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../@shared/shared.module";

const ourTrainersComponents: Type<any>[] = [];

@NgModule({
  declarations: [...ourTrainersComponents],
  imports: [
    SharedModule
  ],
  exports:[...ourTrainersComponents]
})
export class ComponentsModule { }
