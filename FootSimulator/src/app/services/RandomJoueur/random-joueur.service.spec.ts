import { TestBed } from '@angular/core/testing';

import { RandomJoueurService } from './random-joueur.service';

describe('RandomJoueurService', () => {
  let service: RandomJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
