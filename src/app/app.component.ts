import { Component } from '@angular/core';
import { PopulationService } from './services/population.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PopulationService],
})
export class AppComponent {
  title = 'toro-app';
  dataArray: [] = [];
  constructor(private populationService: PopulationService) {}

  ngOnInit() {
    this.populationService.getPopulationInfo().subscribe(
      (data) => {
        this.dataArray = data;
      },
      (error) => {
        console.log('An error accessing Employee Service');
      }
    );
  }
}
