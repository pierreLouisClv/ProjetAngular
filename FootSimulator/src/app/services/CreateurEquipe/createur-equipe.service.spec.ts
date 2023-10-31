import { TestBed } from '@angular/core/testing';

import { CreateurEquipeService } from './createur-equipe.service';

describe('CreateurEquipeService', () => {
  let service: CreateurEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateurEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
