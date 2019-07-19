import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderProducts } from 'src/app/order-products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor(private httpClient: HttpClient) { }
  url = '/api/orderproducts';

  public getAllOrders() {
   return this.httpClient.get<OrderProducts[]> (`${environment.apiUrl + this.url}`);
 }

 public getOrdersByOrderId(id: number) {
   return this.httpClient.get<OrderProducts>(`${environment.apiUrl + this.url}/${id}`);
 }

}
