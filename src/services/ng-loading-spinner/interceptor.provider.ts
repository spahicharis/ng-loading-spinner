import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgLoadingSpinnerService } from './ng-loading-spinner.service';
import 'rxjs/add/operator/finally';

@Injectable()
export class NgLoadingSpinnerInterceptor implements HttpInterceptor {

  constructor(public spinnerService: NgLoadingSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.stop();
    console.log("SPINNER intercept START");

    return next.handle(req).finally(() => {
      console.log("SPINNER intercept STOP");
      let spinner = this.spinnerService;
      setTimeout(function () {
        spinner.start();
      }, 3000)

    });
  }
}
