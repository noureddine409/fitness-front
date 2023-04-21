import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProgramPanelComponent } from './program-panel/program-panel.component';
import { ProgramVideoComponent } from './program-video/program-video.component';
import { ProgramCommentComponent } from './program-comment/program-comment.component';
import { ProgramCreateCommentComponent } from './program-create-comment/program-create-comment.component';


const watchProgramsComponents: Type<any>[] = [ProgramPanelComponent,ProgramVideoComponent,ProgramCommentComponent, ProgramCreateCommentComponent];

@NgModule({
  declarations: [...watchProgramsComponents],
  imports: [
    CommonModule
  ],
    exports: [...watchProgramsComponents, ProgramPanelComponent]
})
export class ComponentsModule {
}
