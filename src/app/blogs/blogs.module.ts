import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogsComponent} from "./blogs.component";
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ComponentsModule
  ],
  exports:[BlogsComponent]
})
export class BlogsModule { }
