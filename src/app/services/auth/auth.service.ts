import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthSevice {
    isUserLoggedIn$!: Observable<boolean>;
    isUserAdmin!: Observable<boolean>;

     private readonly TOKEN_KEY = 'auth_token';
    private readonly ROLE_KEY = 'user_role';

    // Dummy users
    private users = [
        { username: 'admin', password: 'admin', role: 'admin' },
        { username: 'user', password: 'user', role: 'user' }
    ];

    private loginUrl = 'https://dummyjson.com/auth/login';

    constructor(private http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.ROLE_KEY);
    }

    login(username: string, password: string): Observable<{ token: string, role: string } | null> {

        const user = this.users.find(user => user.username === username && user.password === password)
        if(user) {
            localStorage.setItem(this.TOKEN_KEY, 'dummy-token-' + user.username);
            localStorage.setItem(this.ROLE_KEY, user.role)

            return of({
                token: localStorage.getItem(this.TOKEN_KEY)!, role: user.role
            })
        } else {
            return throwError(() => of('Invalid username and password'))
        }
    }
}