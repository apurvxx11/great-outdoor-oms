import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  product_curr: Product;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private  prodService: ProductServiceService) 
              { 
  }

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

}
