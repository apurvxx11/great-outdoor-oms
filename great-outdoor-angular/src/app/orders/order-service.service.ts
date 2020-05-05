import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order } from './order';
import { Product } from '../products/product';
import { ProductServiceService } from '../products/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  product_curr: Product;

  constructor(private http: HttpClient, private prod_service: ProductServiceService) { }


  getOrders(): Observable<Order[]>{
      let url = "http://localhost:1187/orders";
      return this.http.get<Order[]>(url).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data)))
      );
  }

  createOrder(order: Order):Observable<any>
 {
   let url="http://localhost:1187/create_order/new";

   return this.http.post(url,order,{responseType:'text'});
 }
}
