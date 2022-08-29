import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedCounterService {
  private sharedReactiveCounter: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public sharedReactiveCounter$: Observable<number> =
    this.sharedReactiveCounter.asObservable();

  private sharedNonReactiveCounter: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public sharedNonReactiveCounter$: Observable<number> =
    this.sharedNonReactiveCounter.asObservable();

  constructor() {}

  increseSharedReactiveCounter() {
    this.sharedReactiveCounter.next(this.sharedReactiveCounter.value + 1);
  }

  increseSharedNonReactiveCounter() {
    this.sharedNonReactiveCounter.next(this.sharedNonReactiveCounter.value + 1);
  }
}
