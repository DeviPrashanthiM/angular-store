// GET    https://fakestoreapi.com/products
// POST   https://fakestoreapi.com/products
// PUT    https://fakestoreapi.com/products/1
// DELETE https://fakestoreapi.com/products/1


export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating
}