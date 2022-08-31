import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { PageResultComponent } from './page-result/page-result.component';
import { PageInfoConfComponent } from './page-info-conf/page-info-conf.component';


@NgModule({
  declarations: [
    PageResultComponent,
    PageInfoConfComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  exports: [
    PageInfoConfComponent
  ]
})
export class ResultModule { }
