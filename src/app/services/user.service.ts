import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn:'root'
})
export class UserService {

    constructor(private http: HttpClient) {
        
    }
    getUserList(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(
            catchError(error => of([]))
        )
    }
}