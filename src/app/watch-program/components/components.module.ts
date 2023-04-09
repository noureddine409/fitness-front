import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';


const watchProgramsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...watchProgramsComponents],
  imports: [
    CommonModule
  ],
  exports:[...watchProgramsComponents]
})
export class ComponentsModule {
}
