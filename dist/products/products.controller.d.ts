import { Product } from '../models/product.model';
export declare class ProductsController {
    private productModel;
    constructor(productModel: typeof Product);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(product: any): Promise<Product>;
    updateProduct(id: string, product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<{
        deleted: boolean;
    }>;
}
