import { TestBed } from '@angular/core/testing';

import { VoterecordsService } from './voterecords.service';

describe('VoterecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterecordsService = TestBed.get(VoterecordsService);
    expect(service).toBeTruthy();
  });
});
