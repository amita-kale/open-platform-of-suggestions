import { TestBed } from '@angular/core/testing';

import { ideaService } from './idea.service';

describe('StudentideaService', () => {
  let service: ideaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ideaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
