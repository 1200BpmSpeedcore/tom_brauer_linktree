import { TestBed } from '@angular/core/testing';

import { ResponsiveService } from './responsive';

describe('ResponsiveService', () => {
  let service: ResponsiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
