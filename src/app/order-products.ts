import { DecimalPipe } from '@angular/common';
import { Product } from './product';
import { Order } from './order';

export class OrderProducts {
    OrderId: number;
    ProductId: number;
    UnitPrice: number;
    Quantity: number;
    Product: Product;
    Order: Order;
}
