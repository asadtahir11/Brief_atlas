import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionParamRoutingModule } from './function-param-routing.module';
import { InfoConfComponent } from './info-conf/info-conf.component';




@NgModule({
  declarations: [
    InfoConfComponent
  ],
  imports: [
    CommonModule,
    FunctionParamRoutingModule
  ],
  exports: [
    InfoConfComponent
  ]
})
export class FunctionParamModule { }
