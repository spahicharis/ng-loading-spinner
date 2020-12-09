import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgLoadingSpinnerService {

  constructor() { }

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
