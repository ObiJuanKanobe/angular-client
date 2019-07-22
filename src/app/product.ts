import { Supplier } from './shared/data-demo/interfaces/supplier';


export class Product {
    Id: number;
    ProductName: string;
    SupplierId: number;
    UnitPrice: number;
    Package: string;
    IsDiscontinued: boolean;
    Supplier: Supplier;
}
