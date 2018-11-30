import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule
} from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SwapisearchComponent } from './swapisearch/swapisearch.component';
// import { SwapiService } from './swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    SwapisearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }