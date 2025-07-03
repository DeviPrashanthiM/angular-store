import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { CounterService } from '../counter.service';
import { doubleCount, selectCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  doubleCounter$: Observable<number>;

  counterServiceSub?: Subscription;

  constructor(private store: Store<{counter: number}>) {
    this.counter$ = this.store.select(selectCount);
    this.doubleCounter$ = this.store.select(doubleCount);
  }


 
}
