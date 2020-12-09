# NgLoadingSpinner

# Simple loading spinner for Angular (>= 7.x) (Not tested on lower versions but should work fine)

# Installation
`npm install ng-loading-spinner --save`

# Usage
Import `NgLoadingSpinnerModule` in the root module
```ts
import { NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor } from 'ng-loading-spinner';
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

And just put the component in root html

```html
 <ngx-loading-spinner top="100" color="red"></ngx-loading-spinner>
```
