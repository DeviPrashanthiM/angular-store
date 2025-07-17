import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details/product-details.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";


@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailsComponent
    ],
    imports:[
        CommonModule, 
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        DashboardRoutingModule
    ]
})

export class DashboardModule {

}