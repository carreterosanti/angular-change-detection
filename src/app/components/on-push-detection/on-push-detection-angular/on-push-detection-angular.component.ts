import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import { BaseAngularComponent } from '../../base-angular/base-angular.component';

@Component({
  selector: 'app-on-push-detection-angular',
  templateUrl: './on-push-detection-angular.component.html',
  styleUrls: ['./on-push-detection-angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushDetectionAngularComponent extends BaseAngularComponent {
  id: string = 'OnPushDetectionAngularComponent';

  constructor(protected el: ElementRef, protected zone: NgZone) {
    super(el, zone);
  }
}
