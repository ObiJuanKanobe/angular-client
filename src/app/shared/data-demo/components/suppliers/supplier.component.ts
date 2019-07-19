import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/supplier';
import { SupplierService } from '../../services/supplier.service';
import { MatTableDataSource } from '@angular/material';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-demo',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[];
  displayedColumns: string[] = [ 'company', 'contact', 'city', 'country', 'phone', 'fax' ];
  dataSource: MatTableDataSource<Supplier>;
  constructor(public supplierService: SupplierService) {}
  ngOnInit() {
    this.getSuppliers().subscribe(response => {
      if ( !response ) {
        return;
      }
      this.suppliers = response;
      this.dataSource = new MatTableDataSource(response);
    });
  }


  public getSuppliers(): Observable<Supplier[]> {
    return this.supplierService.getAllSuppliers();
  }
}
