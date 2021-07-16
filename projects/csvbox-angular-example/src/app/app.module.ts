import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CsvboxAngularModule } from "csvbox-angular";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsvboxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
