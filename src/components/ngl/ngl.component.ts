import { Component, OnInit } from '@angular/core';

import { NgLoadingSpinnerService } from '../../services';

@Component({
  selector: 'tick-tock',
  styleUrls: ['./ngl.component.scss'],
  templateUrl: './ngl.component.html',
})
export class NgLoadingSpinnerComponent implements OnInit {
  // Current time string.
  public currentTime: string;

  /**
   * Component constructor with injected dependencies.
   * @param tickTockService
   */
  public constructor(
    private tickTockService: NgLoadingSpinnerService
  ) {}

  /**
   * Implements onInit event handler.
   */
  public ngOnInit(): void {
    this.tickTockService.getTick().subscribe(
      (timeString) => this.currentTime = timeString
    );
  }
}
