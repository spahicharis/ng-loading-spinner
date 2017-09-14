import { NgModule } from '@angular/core';
import { NgLoadingSpinnerComponent } from './components';
import { NgLoadingSpinnerService } from './services';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgLoadingSpinnerService,
  ],
  declarations: [
    NgLoadingSpinnerComponent
  ],
  exports: [
    NgLoadingSpinnerComponent
  ]
})
export class NgLoadingSpinnerModule {
}
