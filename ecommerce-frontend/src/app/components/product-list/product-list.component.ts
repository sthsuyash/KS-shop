import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productListService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productListService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
