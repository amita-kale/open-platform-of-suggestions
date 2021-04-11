import { TestBed } from '@angular/core/testing';

import { StudentideaService } from './studentidea.service';

describe('StudentideaService', () => {
  let service: StudentideaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentideaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
