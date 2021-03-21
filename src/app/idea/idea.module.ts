import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';


@NgModule({
  declarations: [ViewIdeaComponent, MyIdeasComponent, ViewAllIdeasComponent, NewIdeaComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule
  ]
})
export class IdeaModule { }
