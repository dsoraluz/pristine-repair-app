import { TestBed, inject } from '@angular/core/testing';

import { RepairDetailService } from './repair-detail.service';

describe('RepairDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepairDetailService]
    });
  });

  it('should ...', inject([RepairDetailService], (service: RepairDetailService) => {
    expect(service).toBeTruthy();
  }));
});
