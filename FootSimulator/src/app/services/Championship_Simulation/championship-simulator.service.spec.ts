import { TestBed } from '@angular/core/testing';

import { ChampionshipSimulatorService } from './championship-simulator.service';

describe('ChampionshipSimulatorService', () => {
  let service: ChampionshipSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionshipSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
