import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsModule } from './products/products.module';
import { ProductShowComponent } from './products/product-show/product-show.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderPlaceComponent } from './orders/order-place/order-place.component';



const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'orders', component: OrderListComponent},
  { path: 'products/:id',component: ProductShowComponent },
  { path: 'place-order/:id', component: OrderPlaceComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
