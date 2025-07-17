import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { from } from "rxjs";
import { UserState } from "src/app/models/user.model";


export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserList = createSelector(selectUserState, (state) => state.userList);

export const selectUserLoading = createSelector(selectUserState, (state) => state.loading);

export const selectErrorMsg = createSelector(selectUserState, state => state.error);