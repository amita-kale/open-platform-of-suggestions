import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { FormsModule } from '@angular/forms';
import { PendingForAccepatanceComponent } from './pending-for-accepatance/pending-for-accepatance.component';


@NgModule({
  declarations: [ViewIdeaComponent, ViewAllIdeasComponent, NewIdeaComponent, MyIdeaComponent, PendingForAccepatanceComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    FormsModule
  ]
})
export class IdeaModule { }
