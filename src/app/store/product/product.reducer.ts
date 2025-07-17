import { createReducer } from "@ngrx/store";
import { Product } from "src/app/models/product.model";


export interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null;


}
const intialProductState: ProductState = {
    products: [],
    loading: false,
    error: null
};

export function productReducer(state:ProductState = intialProductState, action: any) {
    return state;
}