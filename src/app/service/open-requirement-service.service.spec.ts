import { TestBed } from '@angular/core/testing';

import { OpenRequirementService } from './open-requirement-service.service';

describe('OpenRequirementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenRequirementService = TestBed.get(OpenRequirementService);
    expect(service).toBeTruthy();
  });
});
