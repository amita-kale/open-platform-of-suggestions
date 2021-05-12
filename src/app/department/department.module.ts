import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentTableComponent } from './department-table/department-table.component';
import { DepartmentFormComponent } from './department-form/department-form.component';


@NgModule({
  declarations: [DepartmentTableComponent, DepartmentFormComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
