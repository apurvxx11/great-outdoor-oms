import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { OrderPlaceComponent } from '../orders/order-place/order-place.component';


@NgModule({
  declarations: [ProductListComponent, ProductShowComponent],
  imports: 
  [
    RouterModule.forChild(
      [
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', component: ProductShowComponent },
        { path: 'place-order/:id', component: OrderPlaceComponent}
      ]
    ),
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class ProductsModule { }
