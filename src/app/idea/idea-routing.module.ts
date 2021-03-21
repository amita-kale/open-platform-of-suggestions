import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';
import { ViewIdeaComponent } from './view-idea/view-idea.component';

const routes: Routes = [
  {
    path: 'my-ideas',
    component: MyIdeasComponent
  },
  {
    path: 'view-all-ideas',
    component: ViewAllIdeasComponent
  },
  {
    path: 'new-idea',
    component: NewIdeaComponent
  },
  {
    path: 'view-idea',
    component: ViewIdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule { }
