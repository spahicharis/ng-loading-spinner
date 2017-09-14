# `ng-loading-spinner` - Simple loading spinner for Angular 4.3.x

#Screen
![alt text](https://github.com/spahicharis/ng-loading-spinner/ng-loading-spinner.png)
#Installation
`npm install ng-loading-spinner --save`

#Usage

Import `NgLoadingSpinnerModule` in the root module

```ts
import { NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor } from 'ngx-progressbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    // ...
    { provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true }
  ],
  imports: [
    // ...
    HttpClientModule,
    NgLoadingSpinnerModule,
    // ...
  ]
})
```

And just put the component in the template

```html
 <ng-loading-spinner></ng-loading-spinner>
```

#Licence
(TODO)
