import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewIdeaComponent, ViewAllIdeasComponent, NewIdeaComponent, MyIdeaComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    FormsModule
  ]
})
export class IdeaModule { }
