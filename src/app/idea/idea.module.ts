import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';


@NgModule({
  declarations: [ViewIdeaComponent, MyIdeasComponent, ViewAllIdeasComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule
  ]
})
export class IdeaModule { }
