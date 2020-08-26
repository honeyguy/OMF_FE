import { TestBed } from '@angular/core/testing';

import { OMGServiceService } from './omfservice.service';

describe('OMGServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OMGServiceService = TestBed.get(OMGServiceService);
    expect(service).toBeTruthy();
  });
});
