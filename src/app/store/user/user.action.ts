import { Action, createAction } from "@ngrx/store";
import { User, UserActionTypes } from "../../models/user.model";


export class AddUserAction implements Action {
    readonly type: string = UserActionTypes.ADD;
    constructor() { }
}

export class DeleteUserAction implements Action {
    readonly type: string = UserActionTypes.DELETE;
}

export class GetUsersAction implements Action {
    readonly type: string = UserActionTypes.GET;
}

export class GetUsersSuccessAction implements Action {
    readonly type: string = UserActionTypes.GET_SUCCESS;
    constructor(public users: User[]) {}
}

export class GetUsersFailureAction implements Action {
    readonly type: string = UserActionTypes.GET_FAILURE;
     constructor(public error: string) {}
}

export type UserActionType = AddUserAction | DeleteUserAction | GetUsersAction | GetUsersSuccessAction |  GetUsersFailureAction;