import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';
import { OrderPlaceComponent } from './order-place/order-place.component';


@NgModule({
  declarations: [OrderListComponent,
  OrderPlaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    ProductsModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    
  ]
})
export class OrdersModule { }
