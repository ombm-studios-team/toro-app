import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationTableComponent } from './population-table.component';

describe('PopulationTableComponent', () => {
  let component: PopulationTableComponent;
  let fixture: ComponentFixture<PopulationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulationTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopulationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
