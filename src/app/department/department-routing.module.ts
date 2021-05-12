import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentTableComponent } from './department-table/department-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: DepartmentTableComponent
  },
  {
    path: 'form',
    component: DepartmentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
