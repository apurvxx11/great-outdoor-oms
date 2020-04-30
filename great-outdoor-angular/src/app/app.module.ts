import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RetailersComponent } from './retailers/retailers.component';
import { ProductsModule } from './products/products.module';
ProductsModule
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    NavbarComponent,
    WishlistComponent,
    RetailersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
