import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produc: Product[];
  constructor(private product_obj: ProductServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.product_obj.getProducts().subscribe((data)=>{
      this.produc = data;
    },
      error=>
      {
        console.log("error occured",error);
      }
      
    );
  }

}
