import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalculatorComponent,
    DisplayComponent
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
