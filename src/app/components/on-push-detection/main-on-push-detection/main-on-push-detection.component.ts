import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import { BaseAngularComponent } from '../../base-angular/base-angular.component';

@Component({
  selector: 'app-main-on-push-detection',
  templateUrl: './main-on-push-detection.component.html',
  styleUrls: ['./main-on-push-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainOnPushDetectionComponent extends BaseAngularComponent {
  id: string = 'MainOnPushDetectionComponent';
}
