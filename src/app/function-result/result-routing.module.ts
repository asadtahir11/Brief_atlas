import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageResultComponent } from './page-result/page-result.component';

const routes: Routes = [
     {path:'result', component : PageResultComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
