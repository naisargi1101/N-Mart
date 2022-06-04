import { ProductDataService } from '../product-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private pd: ProductDataService) {}
  public products: Observable<any>;
  ngOnInit(): void {
    this.products = this.pd.getAllProducts();
  }
}
