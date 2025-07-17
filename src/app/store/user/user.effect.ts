import { Inject, inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";
import { User, UserActionTypes } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { GetUsersFailureAction, GetUsersSuccessAction } from "./user.action";

@Injectable()
export class UserEffect {

    private userService = inject(UserService);
    private store = inject(Store)

    constructor(private actions$: Actions) {}
    loadUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActionTypes.GET),
            mergeMap(() => this.userService.getUserList().pipe(
                map((users: User[]) => new GetUsersSuccessAction(users as unknown as User[])),
                catchError(err => of(new GetUsersFailureAction('Failed to load users')))
            )
            )
        )
    )
}