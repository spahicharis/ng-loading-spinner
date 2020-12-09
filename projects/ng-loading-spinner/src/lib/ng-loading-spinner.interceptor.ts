import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { NgLoadingSpinnerService } from './ng-loading-spinner.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgLoadingSpinnerInterceptor implements HttpInterceptor {

  private requestCounter: number = 0;
  constructor(public spinnerService: NgLoadingSpinnerService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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