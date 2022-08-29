import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterStyle } from 'src/app/models/counter-style';
import { SharedCounterService } from 'src/app/services/shared-counter.service';

@Component({
  selector: 'app-shared-counter',
  templateUrl: './shared-counter.component.html',
  styleUrls: ['./shared-counter.component.scss'],
})
export class SharedCounterComponent implements OnInit {
  CounterStyle = CounterStyle;

  sharedReactiveCounterValue$: Observable<number> =
    this.sharedReactiveCounterService.sharedReactiveCounter$;

  sharedNonReactiveCounterValue$: Observable<number> =
    this.sharedReactiveCounterService.sharedNonReactiveCounter$;

  constructor(protected sharedReactiveCounterService: SharedCounterService) {}

  ngOnInit(): void {}

  increaseSharedReactiveCounter() {
    this.sharedReactiveCounterService.increseSharedReactiveCounter();
  }

  increaseSharedNonReactiveCounter() {
    this.sharedReactiveCounterService.increseSharedNonReactiveCounter();
  }
}
