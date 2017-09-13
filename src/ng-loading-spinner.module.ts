import { NgModule } from '@angular/core';
import { NgLoadingSpinnerComponent } from './components';
import { NgLoadingSpinnerService } from './services';

@NgModule({
  providers: [
    NgLoadingSpinner,
  ],
  declarations: [
    NgLoadingSpinner,
  ],
  exports: [
    NgLoadingSpinner,
  ]
})
export class NgLoadingSpinner {
}
