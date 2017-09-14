import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/**
 * NgLoadingSpinnerService class.
 */

@Injectable()
export class NgLoadingSpinnerService {

  /** Progress state */
  state = new Subject();
  private _isSpinning: boolean = false;

  constructor() {

  }

  /** Start spinning*/
  start() {
    if(this.isSpinning()) return;
    this._isSpinning = true;
    this.state.next(true);
  }

  /** Stop spinning */
  stop() {
    if(!this.isSpinning()) return;
    this._isSpinning = false;
    /** if spinning stop it */
    this.state.next(false);
  }

  public isSpinning() {
    return this._isSpinning;
  }
}
