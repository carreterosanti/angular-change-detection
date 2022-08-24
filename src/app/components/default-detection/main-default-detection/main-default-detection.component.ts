import { Component, ElementRef, NgZone } from '@angular/core';
import { BaseAngularComponent } from '../../base-angular/base-angular.component';

@Component({
  selector: 'app-main-default-detection',
  templateUrl: './main-default-detection.component.html',
  styleUrls: ['./main-default-detection.component.scss'],
})
export class MainDefaultDetectionComponent extends BaseAngularComponent {
  id: string = 'MainDefaultDetectionComponent';

  constructor(protected el: ElementRef, protected zone: NgZone) {
    super(el, zone);
  }
}
