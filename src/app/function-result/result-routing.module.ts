import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageResultComponent } from './page-result/page-result.component';
import { PageInfoConfComponent } from './page-info-conf/page-info-conf.component';

const routes: Routes = [
     {path:'result', component : PageResultComponent},
     {path:'function/infoconf', component : PageInfoConfComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
