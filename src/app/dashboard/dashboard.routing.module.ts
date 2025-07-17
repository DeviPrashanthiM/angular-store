import { NgModule } from "@angular/core";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details/product-details.component";
import { productResolver } from "./product-resolver.service";


const childRoutes: Route[] = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent,
                resolve: { products: productResolver }

            },
            {
                path: ':id',
                component: ProductDetailsComponent,
            }
        ]
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    }
]
@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }