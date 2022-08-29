import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDefaultDetectionComponent } from './main-default-detection.component';
import { DefaultDetectionAngularModule } from '../default-detection-angular/default-detection-angular.module';
import { LifeCycleListModule } from '../../life-cycle-list/life-cycle-list.module';
import { CounterModule } from '../../counter/counter.module';

@NgModule({
  declarations: [MainDefaultDetectionComponent],
  imports: [
    CommonModule,
    DefaultDetectionAngularModule,
    LifeCycleListModule,
    CounterModule,
  ],
  exports: [MainDefaultDetectionComponent],
})
export class MainDefaultDetectionModule {}
