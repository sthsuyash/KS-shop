import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // define the baseUrl
  // later we will move this to a configuration file
  private baseUrl = 'http://localhost:8080/api/products';

  // inject the HttpClient
  constructor(private httpClient: HttpClient) { }

  // method returns Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// supporting interface to help with the mapping
interface GetResponse {
  // the JSON response from Spring Data REST has a property called _embedded
  // helps to unwrap the JSON from Spring Data REST API _embedded entry
  _embedded: {
    products: Product[]; // and access the products array
  }
}
