import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAngularComponent } from './base-angular.component';

@NgModule({
  declarations: [BaseAngularComponent],
  imports: [CommonModule],
  exports: [BaseAngularComponent],
})
export class BaseAngularModule {}
