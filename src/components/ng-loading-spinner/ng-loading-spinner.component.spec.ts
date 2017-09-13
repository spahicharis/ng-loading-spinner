import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { NgLoadingSpinnerService } from '../../';
import { NgLoadingSpinnerComponent } from './ng-loading-spinner.component';

describe('NgLoadingSpinnerService', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<NgLoadingSpinnerComponent>;
  let componentInstance: NgLoadingSpinnerComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ NgLoadingSpinnerComponent ]
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(NgLoadingSpinnerComponent);
    componentInstance = componentFixture.componentInstance;
  });

  it('should display time string', (done) => {
    componentFixture.detectChanges();

    setInterval(() => {
      componentFixture.detectChanges();

      const tickTockPageElement = componentFixture.debugElement.queryAll(By.css('.ng-loading-spinner-time'));
      const displayedTimeText = tickTockPageElement[0].nativeElement.innerText;

      expect(tickTockPageElement).toBeDefined();
      expect(tickTockPageElement.length).toEqual(1);
      expect(displayedTimeText.length).toEqual(8);
      expect(timeStringFormat.test(displayedTimeText)).toBeTruthy();

      done();
    }, 1000);
  });
});
