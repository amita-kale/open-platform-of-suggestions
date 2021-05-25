import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { PendingForAccepatanceComponent } from './pending-for-accepatance/pending-for-accepatance.component';
import { ViewAllIdeasComponent } from './view-all-ideas/view-all-ideas.component';
import { ViewIdeaComponent } from './view-idea/view-idea.component';

const routes: Routes = [
  {
    path: 'my-idea',
    component: MyIdeaComponent,
  },
  {
    path: 'view-all-ideas',
    component: ViewAllIdeasComponent,
  },
  {
    path: 'new-idea',
    component: NewIdeaComponent,
  },
  {
    path: 'view-idea',
    component: ViewIdeaComponent,
  },
  {
    path: 'view-idea/:id',
    component: ViewIdeaComponent
  },

  {
    path: 'new-idea/:ui', //ui is random variable you can take anything...and : for make this variable dynamic.
    component: NewIdeaComponent,
  },
  {
    path: 'pending-for-accepatance',
    component: PendingForAccepatanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaRoutingModule { }
