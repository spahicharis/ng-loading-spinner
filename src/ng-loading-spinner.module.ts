import { NgModule } from '@angular/core';
import { NgLoadingSpinnerComponent } from './components';
import { NgLoadingSpinnerService } from './services';

@NgModule({
  providers: [
    NgLoadingSpinnerService,
  ],
  declarations: [
    NgLoadingSpinnerComponent,
  ],
  exports: [
    NgLoadingSpinnerComponent,
  ]
})
export class NgLoadingSpinnerModule {
}
