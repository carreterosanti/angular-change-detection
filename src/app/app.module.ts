import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedCounterModule } from './components/shared-counter/shared-counter.module';
import { InfoModule } from './components/info/info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    SharedCounterModule,
    InfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
