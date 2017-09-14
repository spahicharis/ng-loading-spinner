import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgLoadingSpinnerModule, NgLoadingSpinnerBrowserXhr} from "../../esm/lib";
import {BrowserXhr} from "@angular/http";

@NgModule({
  imports: [ BrowserModule, NgLoadingSpinnerModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: BrowserXhr, useClass: NgLoadingSpinnerBrowserXhr}
  ]
})
export class AppModule {
}
