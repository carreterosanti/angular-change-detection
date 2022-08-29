import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterStyle } from 'src/app/models/counter-style';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() title: string;
  @Input() value: number;
  @Input() style: CounterStyle = CounterStyle.LocalNonReactive;
  @Output() increase: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitIncrease() {
    this.increase.emit();
  }
}
