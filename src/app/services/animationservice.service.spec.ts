import { TestBed } from '@angular/core/testing';

import { AnimationserviceService } from './animationservice.service';

describe('AnimationserviceService', () => {
  let service: AnimationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
