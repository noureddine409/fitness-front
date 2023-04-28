import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';

const blogsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...blogsComponents, BlogCardComponent],
  imports: [
    CommonModule
  ],
  exports: [...blogsComponents, BlogCardComponent]
})
export class ComponentsModule { }
