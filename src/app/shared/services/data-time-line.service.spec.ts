import { TestBed } from '@angular/core/testing';

import { DataTimeLineService } from './data-time-line.service';

describe('DataTimeLineService', () => {
  let service: DataTimeLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTimeLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
