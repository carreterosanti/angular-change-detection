import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { CounterDescriptionModule } from './counter-description/counter-description.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, CounterDescriptionModule],
  exports: [InfoComponent],
})
export class InfoModule {}
