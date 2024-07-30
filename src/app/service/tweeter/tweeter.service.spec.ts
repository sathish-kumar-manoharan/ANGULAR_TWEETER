import { TestBed, inject } from '@angular/core/testing';

import { TweeterService } from './tweeter.service';

describe('TweeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweeterService]
    });
  });

  it('should be created', inject([TweeterService], (service: TweeterService) => {
    expect(service).toBeTruthy();
  }));
});
