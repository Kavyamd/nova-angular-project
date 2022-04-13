import { TestBed } from '@angular/core/testing';

import { CreateshopserviceService } from './createshopservice.service';

describe('CreateshopserviceService', () => {
  let service: CreateshopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateshopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
