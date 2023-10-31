import { TestBed } from '@angular/core/testing';

import { JoueurCreateurService } from './joueur-createur.service';

describe('JoueurCreateurService', () => {
  let service: JoueurCreateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurCreateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
