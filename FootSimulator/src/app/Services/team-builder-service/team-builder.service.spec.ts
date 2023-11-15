import { TestBed } from '@angular/core/testing';

import { TeamBuilderService } from './team-builder.service';

describe('EquipeBuilderService', () => {
  let service: TeamBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
