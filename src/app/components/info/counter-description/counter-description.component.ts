import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter-description',
  templateUrl: './counter-description.component.html',
  styleUrls: ['./counter-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CounterDescriptionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() code: string;
  @Input() style: string;

  constructor() {}

  ngOnInit(): void {}
}
