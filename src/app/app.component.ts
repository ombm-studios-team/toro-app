import { Component, OnInit } from '@angular/core';

import { IPopulationInfo } from './models/ipopulation-info';
import { PopulationService } from './services/population.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PopulationService],
})
export class AppComponent implements OnInit {
  title = 'toro-app';
  populationList: IPopulationInfo[] = [];
  dataSource = []; // create a new array
  displayedColumns: string[] = [
    'id_nation',
    'nation',
    'id_year',
    'year',
    'population',
    'slug_nation',
  ];
  constructor(private populationService: PopulationService) {}

  ngOnInit() {
    this.populationService.getPopulationInfo().subscribe(
      (data) => (this.dataSource = data),
      (error) => {
        throw Error(error);
      }
    );
  }
}
