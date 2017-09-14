import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

/*
 Generated class for the ArticleService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DummyService {

  private _headers: Headers;
  data: any;
  url: any;

  constructor(private _http: HttpClient) {
    this.url = 'http://my-car-info-api.herokuapp.com/api/cars';

    // this._headers = new Headers();
    // this._headers.append('Content-Type', 'text/html;charset=utf-8');
    // this._headers.append('Location', 'https://www.google.co.uk');
    // this._headers.append('Content-Length', '0');
    // this.data = null;
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getArticles() {
    return this._http.get(this.url);
      // .map((response: any) => <any[]>response.json().Artikli)
      // .catch(this.handleError);
  }


}

