import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderProducts } from './order-products';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class ApiService {

constructor(private httpClient: HttpClient) { }
   url = '/api/orderproducts';
  public getAllOrders() {
    return this.httpClient.get<OrderProducts[]> (`${environment.apiUrl + this.url}`);
  }
  public getOrdersByOrderId(id: number) {
    return this.httpClient.get<OrderProducts>(`${environment.apiUrl + this.url}/${id}`);
  }
}
