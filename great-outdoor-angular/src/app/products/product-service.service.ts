import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    let url = "http://localhost:1187/products";
    return this.http.get<Product[]>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }
  
  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.product_ID === id))
      );
  }
}
