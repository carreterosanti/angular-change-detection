import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDescriptionComponent } from './counter-description.component';
import { AceEditorModule } from 'ngx-ace-editor-wrapper';

@NgModule({
  declarations: [CounterDescriptionComponent],
  imports: [CommonModule, AceEditorModule],
  exports: [CounterDescriptionComponent],
})
export class CounterDescriptionModule {}
