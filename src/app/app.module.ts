import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PopulationService } from './services/population.service';
import { PopulationTableComponent } from './components/population-table/population-table.component';


@NgModule({
  declarations: [AppComponent, PopulationTableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [PopulationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
