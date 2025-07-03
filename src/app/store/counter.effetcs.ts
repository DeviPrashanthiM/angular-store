import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, withLatestFrom } from "rxjs/operators";
import { selectCount } from "./counter.selector";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffect {
    saveCount = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Counter] increment Counter', '[Counter] decrement Counter'),
            withLatestFrom(this.store.select(selectCount)),
            tap(([actions, counter]) => {
                localStorage.setItem('counter', counter.toString())
            })
        )
    }, {dispatch: false});

    constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
}