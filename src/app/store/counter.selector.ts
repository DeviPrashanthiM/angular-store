import { createSelector } from "@ngrx/store";


export const selectCount = (state: {counter: number}) => state.counter;

//export const doubleCount = (state: {counter: number}) => state.counter * 2;

export const doubleCount = createSelector(selectCount, (val) => val*2);