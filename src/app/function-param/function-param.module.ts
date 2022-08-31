import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionParamRoutingModule } from './function-param-routing.module';
import { InfoConfComponent } from './info-conf/info-conf.component';
import { LastInstComponent } from './last-inst/last-inst.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InfoConfComponent,
    LastInstComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FunctionParamRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    InfoConfComponent,
    LastInstComponent
  ]
})
export class FunctionParamModule { }
