import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/**
 * NgLoadingSpinnerService class.
 */

@Injectable()
export class NgLoadingSpinnerService {

  /** Progress state */
  public state = new Subject();
  private _isSpinning: boolean = false;

  /** Start spinning */
  public start() {
    if (this.isSpinning()) {
      return;
    }
    this._isSpinning = true;
    this.state.next(true);
  }

  /** Stop spinning */
  public stop() {
    if (!this.isSpinning()) {
      return;
    }
    this._isSpinning = false;
    /** if spinning stop it */
    this.state.next(false);
  }

  public isSpinning() {
    return this._isSpinning;
  }
}
