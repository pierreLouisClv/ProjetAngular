import { TestBed } from '@angular/core/testing';

import { RandomPlayerService } from './random-player.service';

describe('RandomJoueurService', () => {
  let service: RandomPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
