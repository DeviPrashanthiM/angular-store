import { UserActionTypes, UserState } from "../../models/user.model";
import { GetUsersFailureAction, GetUsersSuccessAction, UserActionType } from "./user.action";

export const intialUserState: UserState = {
    userList: [],
    selectedUser: null,
    loading: false,
    error: null
}
export function userReducer(state: UserState = intialUserState, action: UserActionType): UserState {
    switch (action.type) {
        case UserActionTypes.GET:
            return { ...state, loading: true, error: null }
        case UserActionTypes.GET_SUCCESS:
            return { ...state, 
                userList: (action as GetUsersSuccessAction).users, 
                loading: false, 
                error: null }
        case UserActionTypes.GET_FAILURE:
            return { ...state, loading: false, error: (action as GetUsersFailureAction).error }

    }

    return state;
}