import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOnPushDetectionComponent } from './main-on-push-detection.component';
import { OnPushDetectionAngularModule } from '../on-push-detection-angular/on-push-detection-angular.module';
import { LifeCycleListModule } from '../../life-cycle-list/life-cycle-list.module';
import { CounterModule } from '../../counter/counter.module';

@NgModule({
  declarations: [MainOnPushDetectionComponent],
  imports: [
    CommonModule,
    OnPushDetectionAngularModule,
    LifeCycleListModule,
    CounterModule,
  ],
  exports: [MainOnPushDetectionComponent],
})
export class MainOnPushDetectionModule {}
