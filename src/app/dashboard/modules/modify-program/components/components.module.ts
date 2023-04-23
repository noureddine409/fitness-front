import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogCardComponent} from "../../trainer-blogs/components/blog-card/blog-card.component";
import {SharedModule} from "../../../../@shared/shared.module";
import {ModifySectionComponent} from "./modify-section/modify-section.component";


export const ModifyProgramComponents: Type<any>[] = [ModifySectionComponent];

@NgModule({
  declarations: [...ModifyProgramComponents],
  imports: [
    SharedModule
  ],
  exports: [...ModifyProgramComponents]
})
export class ComponentsModule { }
