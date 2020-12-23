import {Component, OnInit, Input} from '@angular/core';
import {NgLoadingSpinnerService} from './ng-loading-spinner.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-loading-spinner',
  template: `
    <div [hidden]="!show" id="loading-bar-spinner" [style.top]="top + 'px'">
      <div [style.borderColor]="color" class="spinner-icon"></div>
    </div>
  `,
  styleUrls: ['./ng-loading-spinner.component.scss']
})
export class NgLoadingSpinnerComponent implements OnInit {

  @Input() color = '#000000';
  @Input() top = 105;

  show: boolean;

  constructor(private ngLoadingSpinnerService: NgLoadingSpinnerService) {
    this.ngLoadingSpinnerService.state.subscribe((r: any) => {
      this.show = r;
    });
  }

  ngOnInit(): void {

  }

  ngOnDrestroy(): void {
    this.ngLoadingSpinnerService.state.unsubscribe();
  }

}
