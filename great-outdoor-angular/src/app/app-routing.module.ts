import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Order } from './order';
import { OrdersComponent } from './orders/orders.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsModule } from './products/products.module';
import { ProductShowComponent } from './products/product-show/product-show.component';
ProductsModule


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'products/:id',component: ProductShowComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
