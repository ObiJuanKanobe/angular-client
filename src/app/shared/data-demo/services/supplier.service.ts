import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderProducts } from 'src/app/order-products';
import { environment } from 'src/environments/environment';
import { Supplier } from '../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {

  constructor(private httpClient: HttpClient) { }
  url = '/api/supplier';

  public getAllSuppliers() {
   return this.httpClient.get<Supplier[]> (`${environment.apiUrl + this.url}`);
 }
}
