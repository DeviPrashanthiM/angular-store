import { ResolveFn } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { Product } from "../models/product.model";
import { UserService } from "../services/user.service";
import { inject } from "@angular/core";


export const productResolver: ResolveFn<Product[]> = (route, state): Observable<Product[]> => {
    const userService = inject(UserService);

    return userService.getProductList().pipe(
        map(products => products),
        catchError(() => of([]))
    )
}