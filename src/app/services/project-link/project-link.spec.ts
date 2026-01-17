import { TestBed } from '@angular/core/testing';

import { ProjectLinkService } from './project-link';

describe('ProjectLink', () => {
  let service: ProjectLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
