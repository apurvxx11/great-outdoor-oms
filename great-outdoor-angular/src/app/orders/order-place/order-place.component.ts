import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { OrderServiceService } from '../order-service.service';
import { Order } from '../order';


@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {
  product_curr: Product;
  order: Order = new Order();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private  prodService: ProductServiceService,
              private orderService: OrderServiceService) 
              { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id:number){
    this.prodService.getProduct(id).subscribe({
      next: product =>this.product_curr = product
    })
  }

  createOrder():void
  {
    this.order.product = this.product_curr;
    this.order.order_ID = 1;
    
    this.orderService.createOrder(this.order).subscribe(data=>
      {
        alert("Order placed succesfully");
      },
      error=>
      {
        alert('OutOfStock | Product not available as required');
        console.log("error occured",error);
      }
    );
    

  }

}
