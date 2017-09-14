import {Component, OnInit} from '@angular/core';
import {DummyService} from "./dummy.service";

@Component({
  selector: 'my-app',
  template: `Evo <ng-loading-spinner></ng-loading-spinner>`
})
export class AppComponent implements OnInit{
  public header: string = 'UMD Demo';

  constructor(private service: DummyService){}

  ngOnInit(){
    console.log("INIT APP COMPONENT");
    this.service.getArticles()
      .subscribe(response =>{
        console.log("response", response);
      })
  }
}
