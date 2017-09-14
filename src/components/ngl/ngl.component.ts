import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import { NgLoadingSpinnerService } from '../../services';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'ng-loading-spinner',
  styleUrls: ['./ngl.component.scss'],
  templateUrl: './ngl.component.html'
})
export class NgLoadingSpinnerComponent implements OnInit, OnDestroy {
  public show: boolean;
  /**
   * Component constructor with injected dependencies.
   * @param progress
   */
  public constructor(
    private progress: NgLoadingSpinnerService
  ) {

    this.progress.state.subscribe(
      (response: boolean) => {
        this.show = response;
      }
    );
  }

  public ngOnInit(){

  }
  public ngOnDestroy() {
    this.progress.state.unsubscribe();
  }
}
