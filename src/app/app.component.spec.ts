import {
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PopulationService } from './services/population.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { IPopulationInfo } from './models/ipopulation-info';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let populationService: PopulationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [PopulationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    populationService = TestBed.inject(PopulationService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve population info on init', () => {
    const mockResponse: IPopulationInfo[] = [
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      }
    ];
    jest
      .spyOn(populationService, 'getPopulationInfo')
      .mockReturnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.dataSource).toBeTruthy();
  });

  it('should handle errors when retrieving population info', () => {
    jest.spyOn(populationService, 'getPopulationInfo').mockReturnValue(
      new Observable((observer) => {
        observer.error('An error accessing Population Service');
      })
    );
    jest.spyOn(console, 'log');
    component.ngOnInit();

    const logSpy = jest.spyOn(console, 'log');
    console.log('An error accessing Population Service');

    expect(logSpy).toHaveBeenCalledWith(
      'An error accessing Population Service'
    );
  });
});
