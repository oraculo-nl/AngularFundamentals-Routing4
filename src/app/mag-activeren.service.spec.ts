import { TestBed } from '@angular/core/testing';

import { MagActiverenService } from './mag-activeren.service';

describe('MagActiverenService', () => {
  let service: MagActiverenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagActiverenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
