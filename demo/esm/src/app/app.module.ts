import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor } from '../../lib';
import {DummyService} from "./dummy.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [ HttpClientModule, BrowserModule, NgLoadingSpinnerModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers:[DummyService,
    { provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true }]
})
export class AppModule {
}
