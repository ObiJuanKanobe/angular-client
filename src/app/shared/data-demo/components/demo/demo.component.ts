import { Component, OnInit } from '@angular/core';
import { OrderProducts } from 'src/app/order-products';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title: string;
  orderId: number;
  orderProduct: OrderProducts;
  orderProducts: OrderProducts[];
  constructor(public apiService: ApiService) {}
  ngOnInit() {
    this.orderId = 11;
    this.title = 'hi';
    this.getAllOrderProducts().subscribe(response => {
      if ( !response ) {
        return;
      }
      this.orderProducts = response;
    } );
    this.getOrdersById( this.orderId ).subscribe(response => {
      if (!response) {
        return;
      }
      this.orderProduct = response;
      console.log( response );
    });
  }

  public getAllOrderProducts(): Observable<OrderProducts[]> {
    return this.apiService.getAllOrders();
  }

  public getOrdersById(id: number): Observable<OrderProducts> {
    return this.apiService.getOrdersByOrderId(11);
  }
}
