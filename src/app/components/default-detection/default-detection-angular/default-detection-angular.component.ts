import { Component, ElementRef, NgZone } from '@angular/core';
import { BaseAngularComponent } from '../../base-angular/base-angular.component';

@Component({
  selector: 'app-default-detection-angular',
  templateUrl: './default-detection-angular.component.html',
  styleUrls: ['./default-detection-angular.component.scss'],
})
export class DefaultDetectionAngularComponent extends BaseAngularComponent {
  id: string = 'DefaultDetectionAngularComponent';

  constructor(protected el: ElementRef, protected zone: NgZone) {
    super(el, zone);
  }
}
