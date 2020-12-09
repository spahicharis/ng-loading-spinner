import { Component, OnInit, Input } from '@angular/core';
import { NgLoadingSpinnerService } from './ng-loading-spinner.service';

@Component({
  selector: 'ng-loading-spinner',
  template: `
    <div [hidden]="!show" id="loading-bar-spinner" [style.top]="top + 'px'">
      <div [style.borderColor]="color" class="spinner-icon"></div>
    </div>
  `,
  styleUrls: ['./ngx-loading-spinner.component.scss']
})
export class NgLoadingSpinnerComponent implements OnInit {

  @Input() color: string = '#000000';
  @Input() top: number = 105;
  
  show: boolean;

  constructor(private ngLoadingSpinnerService: NgLoadingSpinnerService) {
    this.ngLoadingSpinnerService.state.subscribe((r: any) => {
      console.log('state', r);
      this.show = r;
    })
   }

  ngOnInit() {
    
  }

  ngOnDrestroy() {
    this.ngLoadingSpinnerService.state.unsubscribe();
  }

}
