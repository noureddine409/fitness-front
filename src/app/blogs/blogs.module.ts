import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogsComponent} from "./blogs.component";
import {ComponentsModule} from "./components/components.module";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
  declarations: [BlogsComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        ComponentsModule,
        SharedModule
    ],
  exports:[BlogsComponent]
})
export class BlogsModule { }
