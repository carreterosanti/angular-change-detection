import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCounterComponent } from './shared-counter.component';
import { CounterModule } from '../counter/counter.module';

@NgModule({
  declarations: [SharedCounterComponent],
  imports: [CommonModule, CounterModule],
  exports: [SharedCounterComponent],
})
export class SharedCounterModule {}
