import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { Order } from '../order';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  constructor(private order_service: OrderServiceService) { }

  ngOnInit(): void {
    this.order_service.getOrders().subscribe((data)=>{
        this.orders = data;
    },
    error=>
    {
      console.log("error occured",error);
    });
  }

}
