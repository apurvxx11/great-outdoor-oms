package com.capg.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capg.beans.*;
import com.capg.exceptions.*;
import com.capg.service.OrderServiceI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin("*")
@RestController

public class OrderController {
	
	@Autowired
	OrderServiceI orderService;
	
	@GetMapping(value="/product/{}")
	public Product findProduct(@PathVariable int id) throws ProductNotFoundException{
		return orderService.findProductByID(id);
	}
	
	@GetMapping(value="/products")
	public List<Order> viewProducts() {
		return orderService.retrieveProducts();
	}
	
	@GetMapping(value="/orders")
	public List<Order> viewOrders() {
		return orderService.retrieveOrders();
	}
	
	@DeleteMapping(value="/remove_order/{id}")
	public void removeOrders(@PathVariable int id) {
		orderService.removeOrder(id);
	}

	
	@PostMapping(value="/create_order/new",consumes= {"application/json"})
	public String createOrder(@RequestBody Order order) throws OutOfStockException
	{
		
		orderService.createOrder(order.getProduct(),order.getQuantity());
		return "product added successfully";
	}

}
