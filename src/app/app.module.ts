import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { CovalentLoadingModule } from '@covalent/core/loading';


import { AppComponent } from './app.component';
import { LoadFormComponent } from './load-form/load-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoadFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CovalentLoadingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
