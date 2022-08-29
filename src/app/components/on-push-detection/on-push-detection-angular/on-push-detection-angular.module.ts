import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnPushDetectionAngularComponent } from './on-push-detection-angular.component';
import { LifeCycleListModule } from '../../life-cycle-list/life-cycle-list.module';
import { CounterModule } from '../../counter/counter.module';

@NgModule({
  declarations: [OnPushDetectionAngularComponent],
  imports: [CommonModule, LifeCycleListModule, CounterModule],
  exports: [OnPushDetectionAngularComponent],
})
export class OnPushDetectionAngularModule {}
