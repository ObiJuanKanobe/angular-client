import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/supplier';
import { SupplierService } from '../../services/supplier.service';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  displayedColumns: string[] = [
    'Id',
    'CompanyName',
    'ContactName',
    'ContactTitle',
    'City',
    'Country',
    'Phone',
    'Fax' ];
  suppliers: Supplier[];
  dataSource: MatTableDataSource<Supplier>;
  constructor(public supplierService: SupplierService) {}

  ngOnInit() {
    this.getSuppliers().subscribe(response => {
      if ( !response ) {
        return;
      }
      this.suppliers = response;
      this.dataSource = new MatTableDataSource( this.suppliers );
    });
  }


  public getSuppliers(): Observable<Supplier[]> {
    return this.supplierService.getAllSuppliers();
  }
}
