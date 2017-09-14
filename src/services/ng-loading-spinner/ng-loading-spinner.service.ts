import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/**
 * NgLoadingSpinnerService class.
 */

@Injectable()
export class NgLoadingSpinnerService {

  /** Progress state */
  state = new Subject();

  constructor() {

    console.log("SPINNER SERVICE CONSTRUCTOR");
  }

  /** Start spinning*/
  start() {
    console.log("SPINNER SERVICE START");
    this.state.next({
      show: true
    });
  }

  /** Stop spinning */
  stop() {
    console.log("SPINNER SERVICE STOP");
    /** if started complete the progress */
    this.state.next({
      show: false
    });
  }
}
