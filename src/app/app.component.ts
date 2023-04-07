import { Component, OnInit } from '@angular/core';

import { IPopulationInfo } from './models/ipopulation-info';
import { PopulationService } from './services/population.service';
import { ToroTableComponent } from "./components/toro-table/toro-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toro-app';
  constructor() {}

  ngOnInit() {

  }
}
