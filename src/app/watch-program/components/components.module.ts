import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProgramPanelComponent } from './program-panel/program-panel.component';
import { ProgramVideoComponent } from './program-video/program-video.component';
import { ProgramCommentComponent } from './program-comment/program-comment.component';
import {SharedModule} from "../../@shared/shared.module";
import { CommentReplyComponent } from './comment-reply/comment-reply.component';


const watchProgramsComponents: Type<any>[] = [ProgramPanelComponent,ProgramVideoComponent,ProgramCommentComponent];

@NgModule({
  declarations: [...watchProgramsComponents, CommentReplyComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [...watchProgramsComponents, ProgramPanelComponent, CommentReplyComponent]
})
export class ComponentsModule {
}
