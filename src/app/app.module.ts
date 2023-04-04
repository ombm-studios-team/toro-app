import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

import { PopulationService } from './services/population.service';
import { PopulationTableComponent } from './components/population-table/population-table.component';


@NgModule({
  declarations: [AppComponent, PopulationTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [PopulationService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
