import { TestBed, inject } from '@angular/core/testing';

import { ApplicantService } from './applicant.service';

describe('ApplicantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantService]
    });
  });

  it('should ...', inject([ApplicantService], (service: ApplicantService) => {
    expect(service).toBeTruthy();
  }));
});
