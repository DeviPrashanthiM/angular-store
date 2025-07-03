import { createReducer, on, Action } from "@ngrx/store";
import { CounterActions, DecrementAction, IncrementAction } from "./counter.actions";
const initialState = 0;

// export const counterReducer = createReducer(
//     initialState,
//     on(increment, (state, action) => {
//         return state + action.value;
//     })
// );




export function counterReducer(state = initialState, action: CounterActions |  Action) {
    if(action.type === '[Counter] increment Counter') {
        return state + (action as IncrementAction).value;
    }

    if(action.type === '[Counter] decrement Counter') {
        return state - (action as DecrementAction).value;
    }
    return state;
}