import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultModule } from '../function-result/result.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FunctionParamModule } from '../function-param/function-param.module';
import { RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    FilterBarComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FunctionParamModule,
    NgMultiSelectDropDownModule.forRoot(),
    IconsModule
  ],
  exports: [
    ResultModule,
    UiModule,
    TemplatesModule,
    IconsModule,
    FunctionParamModule,
    FilterBarComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
