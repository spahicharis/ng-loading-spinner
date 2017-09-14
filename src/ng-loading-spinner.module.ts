import { NgModule } from '@angular/core';
import { NgLoadingSpinnerComponent, NgLoadingSpinnerBaseComponent } from './components';
import { NgLoadingSpinnerService } from './services';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgLoadingSpinnerService,
  ],
  declarations: [
    NgLoadingSpinnerComponent,
    NgLoadingSpinnerBaseComponent
  ],
  exports: [
    NgLoadingSpinnerComponent
  ]
})
export class NgLoadingSpinnerModule {
}
