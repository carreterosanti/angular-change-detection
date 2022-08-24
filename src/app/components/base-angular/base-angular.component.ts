import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { BackgroundColor } from 'src/app/models/background-color.model';

@Component({
  selector: 'app-base-angular',
  templateUrl: './base-angular.component.html',
  styleUrls: ['./base-angular.component.scss'],
})
export class BaseAngularComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  id: string = 'Base Angular Component';

  backgroundColor$: Subject<BackgroundColor> = new Subject();

  nonReactiveCounter: number = 0;

  constructor(protected el: ElementRef, protected zone: NgZone) {
    setTimeout(() => {
      this.nonReactiveCounter = this.nonReactiveCounter + 1;
    }, 20);
  }

  increaseNonReactiveCounter() {
    this.nonReactiveCounter = this.nonReactiveCounter + 1;
  }

  lifeCycleMethod(lifeCycleMethod: string) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        setTimeout(() => {
          this.el.nativeElement.style.color = 'black';
        }, 0);
        setTimeout(() => {
          this.el.nativeElement.style.color = BackgroundColor[lifeCycleMethod];
        }, 100);
        setTimeout(() => {
          this.el.nativeElement.style.color = 'black';
        }, 200);
      }, 0);
    });
  }

  ngOnChanges(): void {
    this.lifeCycleMethod('ngOnChanges');
  }

  ngOnInit(): void {
    this.lifeCycleMethod('ngOnInit');
  }

  ngDoCheck(): void {
    this.lifeCycleMethod('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.lifeCycleMethod('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.lifeCycleMethod('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.lifeCycleMethod('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.lifeCycleMethod('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.lifeCycleMethod('ngOnDestroy');
  }
}
