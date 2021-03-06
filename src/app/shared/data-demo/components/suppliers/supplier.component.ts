import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierService } from '../../services/supplier.service';
import { MatTable, MatTableDataSource } from '@angular/material';
import { Supplier } from '../../interfaces/supplier';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  dataSource: MatTableDataSource<Supplier>;
  displayedColumns: string[] = [
    'CompanyName',
    'ContactName',
    'ContactTitle',
    'City',
    'Country',
    'Phone',
    'Fax'
  ];

  suppliers: Supplier[];
  constructor(public supplierService: SupplierService) {}

  ngOnInit() {
    this.getSuppliers().subscribe(response => {
      if ( !response ) {
        console.log( 'didnt grab anything.' );
        return;
      }
      this.suppliers = response;
      this.dataSource = new MatTableDataSource( this.suppliers );
    });
  }

  public getSuppliers() {
    return this.supplierService.getAllSuppliers();
  }

}
