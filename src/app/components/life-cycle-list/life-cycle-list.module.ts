import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleListComponent } from './life-cycle-list.component';

@NgModule({
  declarations: [LifeCycleListComponent],
  imports: [CommonModule],
  exports: [LifeCycleListComponent],
})
export class LifeCycleListModule {}
