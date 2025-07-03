import { Action, createAction, props } from "@ngrx/store";

// export const increment = createAction(
// '[Counter] increment Counter', props<{value:number}>()
// )



// export const decrement = createAction(
//     '[Counter] decrement Counter',
//     props<{value: number}>()
// )


export class IncrementAction implements Action {
    readonly type = '[Counter] increment Counter';

    constructor(public value: number) {

    }

}

export class DecrementAction implements Action {
    readonly type = '[Counter] decrement Counter'
    constructor(public value: number){}
}

export type CounterActions = IncrementAction | DecrementAction;