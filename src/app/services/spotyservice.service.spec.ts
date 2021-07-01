import { TestBed } from '@angular/core/testing';

import { SpotyserviceService } from './spotyservice.service';

describe('SpotyserviceService', () => {
  let service: SpotyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
