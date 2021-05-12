import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentTableComponent } from './department-table/department-table.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepartmentTableComponent, DepartmentFormComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule
  ]
})
export class DepartmentModule { }
