import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOnPushDetectionComponent } from './main-on-push-detection.component';
import { OnPushDetectionAngularModule } from '../on-push-detection-angular/on-push-detection-angular.module';

@NgModule({
  declarations: [MainOnPushDetectionComponent],
  imports: [CommonModule, OnPushDetectionAngularModule],
  exports: [MainOnPushDetectionComponent],
})
export class MainOnPushDetectionModule {}
