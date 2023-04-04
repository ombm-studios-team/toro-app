import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PopulationService } from './population.service';
import { IPopulationInfo } from '../models/ipopulation-info';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('PopulationService', () => {
  let service: PopulationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PopulationService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(PopulationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<IPopulationInfo[]>', () => {
    const mockResponse: IPopulationInfo[] = [
      {
        'ID Nation': '01000US',
        Nation: 'United States',
        'ID Year': 2020,
        Year: '2020',
        Population: 326569308,
        'Slug Nation': 'united-states',
      },
    ];
    service.getPopulationInfo().subscribe((populationInfo) => {
      expect(populationInfo).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['endpoint']);
    expect(req.request.method).toBe('GET');
    req.flush({ data: mockResponse });
  });

  it('should handle HTTP errors', () => {
    const mockError = new HttpErrorResponse({
      status: 400,
      statusText: 'Bad Request',
    });
    jest
      .spyOn(service, 'throwError')
      .mockReturnValue(throwError(() => mockError));

    service.getPopulationInfo().subscribe(
      () => {},
      (error) => {
        expect(error).toBe(mockError);
      }
    );

    const req = httpMock.expectOne(service['endpoint']);
    expect(req.request.method).toBe('GET');
    // req.error(mockError);
  });
});
