import { TestBed } from '@angular/core/testing';

import { ImpServiceService } from './imp-service.service';

describe('ImpServiceService', () => {
  let service: ImpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
