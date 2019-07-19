import { Customer } from './customer';

export class Order {
    Id: number;
    OrderDate: Date;
    OrderNumber: number;
    Customerid: number;
    TotalAmount: number;
    Customer: Customer;
}
