import { NgModule } from '@angular/core';
import { NgLoadingSpinnerComponent } from './ng-loading-spinner.component';
import { NgLoadingSpinnerService } from './ng-loading-spinner.service';

@NgModule({
  declarations: [NgLoadingSpinnerComponent],
  imports: [
    
  ],
  exports: [NgLoadingSpinnerComponent],
  providers: [NgLoadingSpinnerService]
})
export class NgLoadingSpinnerModule { }
