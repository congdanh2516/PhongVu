import { Category } from "src/app/shared/components/category/models/category";
export class Product {
    public _id: string;
    public name: string;
    public description: string;
    public sku: string;
    public price: number;
    public quantity: number;
    public image: string;
    public category: Category;
    public slug: string;
    public warrant: {
        months: number,
        description: string
    }
}