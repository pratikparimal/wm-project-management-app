import { TestBed } from '@angular/core/testing';

import { ResourceDetailsService } from './resource-details.service';

describe('ResourceDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceDetailsService = TestBed.get(ResourceDetailsService);
    expect(service).toBeTruthy();
  });
});
