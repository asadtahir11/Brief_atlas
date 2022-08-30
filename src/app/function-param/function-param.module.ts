import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionParamRoutingModule } from './function-param-routing.module';
import { InfoConfComponent } from './info-conf/info-conf.component';
import { LastInstComponent } from './last-inst/last-inst.component';




@NgModule({
  declarations: [
    InfoConfComponent,
    LastInstComponent
  ],
  imports: [
    CommonModule,
    FunctionParamRoutingModule
  ],
  exports: [
    InfoConfComponent,
    LastInstComponent
  ]
})
export class FunctionParamModule { }
