import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDetectionAngularModule } from './default-detection/default-detection-angular/default-detection-angular.module';
import { OnPushDetectionAngularModule } from './on-push-detection/on-push-detection-angular/on-push-detection-angular.module';
import { MainDefaultDetectionModule } from './default-detection/main-default-detection/main-default-detection.module';
import { MainOnPushDetectionModule } from './on-push-detection/main-on-push-detection/main-on-push-detection.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultDetectionAngularModule,
    OnPushDetectionAngularModule,
    MainDefaultDetectionModule,
    MainOnPushDetectionModule,
  ],
  exports: [
    DefaultDetectionAngularModule,
    OnPushDetectionAngularModule,
    MainDefaultDetectionModule,
    MainOnPushDetectionModule,
  ],
})
export class ComponentsModule {}
