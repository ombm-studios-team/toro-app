import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IPopulationInfo } from '../../models/ipopulation-info';
import { PopulationService } from '../../services/population.service';

@Component({
  selector: 'app-toro-table',
  templateUrl: './toro-table.component.html',
  styleUrls: ['./toro-table.component.css'],
  providers: [PopulationService],
})
export class ToroTableComponent {
  populationList: IPopulationInfo[] = [];
  dataSource = [];
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
