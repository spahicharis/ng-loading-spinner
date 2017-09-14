import { Component, OnDestroy, OnInit} from '@angular/core';

import { NgLoadingSpinnerService } from '../../services';

@Component({
  selector: 'ng-loading-spinner',
  styleUrls: ['./ngl.component.scss'],
  templateUrl: './ngl.component.html'
})
export class NgLoadingSpinnerComponent implements OnDestroy {
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
  public ngOnDestroy() {
    this.progress.state.unsubscribe();
  }
}
