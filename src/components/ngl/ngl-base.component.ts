import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'ng-loading-spinner-base',
  template: `
  <div class="" *ngIf="state">
    Evo moje komponente
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgLoadingSpinnerBaseComponent {

  @Input() state: any;
}
