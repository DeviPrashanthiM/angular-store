import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { User } from "../models/user.model";
import { Product } from "../models/product.model";

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


    getProductList(): Observable<Product[]> {
        return this.http.get<Product[]>('https://fakestoreapi.com/products');
    }

    getProductDetails(productId: string): Observable<Product> {
        return this.http.get<Product>('https://fakestoreapi.com/products/'+productId)
    }

    
}