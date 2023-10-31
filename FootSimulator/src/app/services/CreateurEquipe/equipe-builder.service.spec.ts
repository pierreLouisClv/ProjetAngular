import { TestBed } from '@angular/core/testing';

import { EquipeBuilderService } from './equipe-builder.service';

describe('EquipeBuilderService', () => {
  let service: EquipeBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
