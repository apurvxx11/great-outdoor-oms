package com.capg.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		return orderService.retrieve();
	}
	
	@PostMapping(value="/product/new",consumes= {"application/json"})
	public String addProduct(@RequestBody Product product) throws OutOfStockException
	{
		orderService.createOrder(product,0);
		return "product added successfully";
	}

}
