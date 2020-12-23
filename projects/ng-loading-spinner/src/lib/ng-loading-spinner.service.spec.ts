import {TestBed} from '@angular/core/testing';

import {NgLoadingSpinnerService} from './ng-loading-spinner.service';

describe('NgLoadingSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLoadingSpinnerService = TestBed.get(NgLoadingSpinnerService);
    expect(service).toBeTruthy();
  });
});
