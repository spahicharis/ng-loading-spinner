# Simple loading spinner for Angular (>= 7.x)
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
# Installation
`npm install ng-loading-spinner --save`
# Screenshot
![Screenshot](https://raw.githubusercontent.com/spahicharis/ng-loading-spinner/master/projects/ng-loading-spinner/Screenshot.png)
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
 <ng-loading-spinner top="100" color="green"></ng-loading-spinner>
```
## Customization
Use top and color inputs for basic customization.
# Funding
Buy me a cup of coffee. Thank you.
[Paypal.me](https://paypal.me/harespaha)
