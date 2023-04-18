import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProgramPanelComponent } from './program-panel/program-panel.component';
import { ProgramVideoComponent } from './program-video/program-video.component';


const watchProgramsComponents: Type<any>[] = [ProgramPanelComponent,ProgramVideoComponent];

@NgModule({
  declarations: [...watchProgramsComponents, ProgramPanelComponent, ProgramVideoComponent],
  imports: [
    CommonModule
  ],
    exports: [...watchProgramsComponents, ProgramPanelComponent]
})
export class ComponentsModule {
}
