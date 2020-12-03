import { TestBed } from '@angular/core/testing';

import { MCQdataService } from './mcqdata.service';

describe('MCQdataService', () => {
  let service: MCQdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCQdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
