import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDetectionAngularComponent } from './default-detection-angular.component';
import { LifeCycleListModule } from '../../life-cycle-list/life-cycle-list.module';
import { CounterModule } from '../../counter/counter.module';

@NgModule({
  declarations: [DefaultDetectionAngularComponent],
  imports: [CommonModule, LifeCycleListModule, CounterModule],
  exports: [DefaultDetectionAngularComponent],
})
export class DefaultDetectionAngularModule {}
