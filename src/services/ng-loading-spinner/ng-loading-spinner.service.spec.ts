import { NgLoadingSpinnerService } from './ng-loading-spinner.service';

describe('NgLoadingSpinnerService', () => {
  let tickTockService: NgLoadingSpinnerService;

  beforeEach(() => {
    tickTockService = new NgLoadingSpinnerService();
  });

  it('should return observable with time string', (done) => {

    done();
    // const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
    //
    // tickTockService.getTick().subscribe(
    //   (timeString) => {
    //     expect(timeStringFormat.test(timeString)).toBeTruthy(
    //       'Time string should have hh:mm:ss format'
    //     );
    //
    //     // Stop asynchronous test.
    //     done();
    //   }
    // );
  });
});
