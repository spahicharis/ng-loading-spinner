import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor} from "../../esm/lib";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  imports: [ BrowserModule, NgLoadingSpinnerModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true }
  ]
})
export class AppModule {
}
