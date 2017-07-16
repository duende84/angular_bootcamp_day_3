import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalculatorModule } from './calculator/calculator.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
