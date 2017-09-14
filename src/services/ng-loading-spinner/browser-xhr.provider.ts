import {Injectable} from '@angular/core';
import {BrowserXhr} from '@angular/http';
import {NgLoadingSpinnerService} from './ng-loading-spinner.service';

@Injectable()
export class NgLoadingSpinnerBrowserXhr extends BrowserXhr {

  constructor(private service: NgLoadingSpinnerService) {
    super();
  }

  public build() {
    const xhr = super.build();

    xhr.onload = (evt: any) => this.stop();
    xhr.onerror = (evt: any) => this.stop();
    xhr.onabort = (evt: any) => this.stop();

    xhr.onloadstart = (event: any) => {
        this.service.start();
    };

    return xhr;
  }

  private stop() {
      this.service.stop();
  }
}
