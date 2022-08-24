import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDefaultDetectionComponent } from './main-default-detection.component';
import { DefaultDetectionAngularModule } from '../default-detection-angular/default-detection-angular.module';

@NgModule({
  declarations: [MainDefaultDetectionComponent],
  imports: [CommonModule, DefaultDetectionAngularModule],
  exports: [MainDefaultDetectionComponent],
})
export class MainDefaultDetectionModule {}
