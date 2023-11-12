import { TestBed } from '@angular/core/testing';

import { PlayerCreatorService } from './player-creator.service';

describe('JoueurCreateurService', () => {
  let service: PlayerCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
