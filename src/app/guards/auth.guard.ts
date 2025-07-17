import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, CanActivateFn, Router } from "@angular/router";
import { AuthSevice } from "../services/auth/auth.service";


export const authGuard: CanActivateFn = (route, state) => {

    const authService = inject(AuthSevice);
    const router = inject(Router);

    if(authService.isLoggedIn())
        return true;

    else
        return  router.createUrlTree(['/login'], {
      queryParams: { returnUrl:state.url }
    });
}