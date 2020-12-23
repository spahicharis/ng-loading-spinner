import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {NgLoadingSpinnerService} from './ng-loading-spinner.service';

@Injectable()
export class NgLoadingSpinnerInterceptor implements HttpInterceptor {

  private requestCounter = 0;

  constructor(public spinnerService: NgLoadingSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.start();
    this.requestCounter++;
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.requestCounter--;
          if (this.requestCounter === 0) {
            this.spinnerService.stop();
          }
        }));
  }
}
