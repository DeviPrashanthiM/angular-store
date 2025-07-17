import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./guards/auth.guard";


const routes: Route[] = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [authGuard]
    },
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
    
}