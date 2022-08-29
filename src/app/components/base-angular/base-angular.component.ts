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
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CounterStyle } from 'src/app/models/counter-style';
import { LifeCycleIndex } from 'src/app/models/life-cycle-index.model';
import { SharedCounterService } from 'src/app/services/shared-counter.service';

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
  id: string = 'Base Angular Component';
  CounterStyle = CounterStyle;

  nonReactiveCounter: number = 0;
  private reactiveCounter: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public reactiveCounter$: Observable<number> =
    this.reactiveCounter.asObservable();

  sharedNonReactiveCounter: number;
  sharedReactiveCounter$: Observable<number>;

  constructor(
    protected el: ElementRef,
    protected zone: NgZone,
    protected sharedCounterService: SharedCounterService
  ) {
    // setTimeout(() => {
    //   this.increaseReactiveCounter();
    // }, 20);
    // setTimeout(() => {
    //   this.increaseNonReactiveCounter();
    // }, 200);
  }

  increaseNonReactiveCounter() {
    this.nonReactiveCounter = this.nonReactiveCounter + 1;
  }

  increaseReactiveCounter() {
    this.reactiveCounter.next(this.reactiveCounter.value + 1);
  }

  increaseNonReactiveSharedCounter() {
    this.sharedCounterService.increseSharedReactiveCounter();
  }

  increaseReactiveSharedCounter() {
    this.sharedCounterService.increseSharedReactiveCounter();
  }

  lifeCycleMethod(lifeCycleMethod: string) {
    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     setTimeout(() => {
    //       this.el.nativeElement.firstChild.style.backgroundColor =
    //         'rgba(255, 255, 255, 1)';
    //       this.el.nativeElement.firstChild.style.border =
    //         '1px transparent transparent';
    //     }, 100);
    //     setTimeout(() => {
    //       this.el.nativeElement.firstChild.style.backgroundColor =
    //         BackgroundColor[lifeCycleMethod];
    //       this.el.nativeElement.firstChild.style.border = '1px solid grey';
    //     }, 300);
    //     setTimeout(() => {
    //       this.el.nativeElement.firstChild.style.backgroundColor =
    //         'rgba(255, 255, 255, 1)';
    //       this.el.nativeElement.firstChild.style.border =
    //         '1px transparent transparent';
    //     }, 600);
    //   }, 0);
    // });
    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     setTimeout(() => {
    //       this.hideAll(
    //         this.el.nativeElement.lastElementChild.lastElementChild
    //           .lastElementChild.childNodes
    //       );
    //     }, 100);
    //     setTimeout(() => {
    //       this.el.nativeElement.lastElementChild.lastElementChild.lastElementChild.childNodes[
    //         LifeCycleIndex[lifeCycleMethod]
    //       ].style.display = 'block';
    //     }, 300);
    //     setTimeout(() => {
    //       this.hideAll(
    //         this.el.nativeElement.lastElementChild.lastElementChild
    //           .lastElementChild.childNodes
    //       );
    //     }, 600);
    //   }, 0);
    // });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        setTimeout(() => {
          this.el.nativeElement.lastElementChild.childNodes[1].lastElementChild.childNodes[
            LifeCycleIndex[lifeCycleMethod]
          ].style.display = 'block';
        }, 100);
        setTimeout(() => {
          this.el.nativeElement.lastElementChild.childNodes[1].lastElementChild.childNodes[
            LifeCycleIndex[lifeCycleMethod]
          ].style.display = 'none';
        }, 1100);
      }, 0);
    });
  }

  hideAll(nativeElement: any[]) {
    for (let index = 0; index < nativeElement.length; index++) {
      nativeElement[index].style.display = 'none';
    }
  }

  ngOnChanges(): void {
    this.lifeCycleMethod('ngOnChanges');
  }

  ngOnInit(): void {
    this.lifeCycleMethod('ngOnInit');

    this.sharedCounterService.sharedNonReactiveCounter$.subscribe((counter) => {
      this.sharedNonReactiveCounter = counter;
    });

    this.sharedReactiveCounter$ =
      this.sharedCounterService.sharedReactiveCounter$;
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
