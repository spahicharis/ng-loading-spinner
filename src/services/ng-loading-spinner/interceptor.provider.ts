import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgLoadingSpinnerService } from './ng-loading-spinner.service';
import 'rxjs/add/operator/finally';

@Injectable()
export class NgLoadingSpinnerInterceptor implements HttpInterceptor {

  private requestCounter: number = 0;
  constructor(public spinnerService: NgLoadingSpinnerService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.start();
    this.requestCounter++;
    return next.handle(req).finally(() => {
      this.requestCounter--;
      if (this.requestCounter === 0) {
        this.spinnerService.stop();
      }
    });
  }
}
