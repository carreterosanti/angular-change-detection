import { Component, OnInit } from '@angular/core';
import { CounterStyle } from 'src/app/models/counter-style';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  countersInfo = [
    {
      title: 'Local Non Reactive Counter',
      description:
        'Variable local de cada componente, declarada como <i>nonReactiveCounter: number = 0;</i>',
      code: '',
      style: CounterStyle.LocalNonReactive,
    },
    {
      title: 'Local Reactive Counter Observable',
      description: `Variable local de cada componente, declarada como un <i>reactiveCounter: BehaviorSubject<number></i> y consumido en el template mediante un <i>reactiveCounter$ | async</i>, el cual es declarado como <i>reactiveCounter$: Observable<number> = this.reactiveCounter.asObservable();</i>`,
      code: '',
      style: CounterStyle.LocalReactive,
    },
    {
      title: 'Shared Non Reactive Counter Observable',
      description: `Variable "compartida" declarada en el servicio "SharedCounterService", y "consumida" en el componente de la siguiente manera: <i>this.sharedCounterService.sharedNonReactiveCounter$.subscribe((counter) => {
        this.sharedNonReactiveCounter = counter;
      });</i>`,
      code: '',
      style: CounterStyle.SharedNonReactive,
    },
    {
      title: 'Shared Reactive Counter Observable',
      description: `Variable "compartida" declarada en el servicio "SharedCounterService" y "consumida" en el componente de manera "reactiva" mediante: <i>sharedReactiveCounter$ | async</i>`,
      code: '',
      style: CounterStyle.SharedReactive,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
