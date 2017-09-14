import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import { NgLoadingSpinnerService } from '../../services';

@Component({
  selector: 'ng-loading-spinner',
  styleUrls: ['./ngl.component.scss'],
  templateUrl: './ngl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgLoadingSpinnerComponent implements OnChanges, OnDestroy {
  /**
   * Component constructor with injected dependencies.
   * @param progress
   */
  public constructor(
    private progress: NgLoadingSpinnerService
  ) {

    this.progress.state.subscribe(
      response => {
        console.log("SPINNER CONSTRUCT", response );
      }
    )
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("CHAGNES,",changes);
  }

  ngOnDestroy() {
    this.progress.state.unsubscribe();
  }
}
