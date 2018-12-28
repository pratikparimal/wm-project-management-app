import { TestBed } from '@angular/core/testing';

import { OpenRequirementServiceService } from './open-requirement-service.service';

describe('OpenRequirementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenRequirementServiceService = TestBed.get(OpenRequirementServiceService);
    expect(service).toBeTruthy();
  });
});
