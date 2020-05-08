package com.capg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.beans.Order;
import com.capg.beans.Product;
import com.capg.dao.OrderDAOI;
import com.capg.exceptions.*;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderServiceI{
	
	@Autowired
	OrderDAOI order;

	@Override
	public void createOrder(Product p,int qty) throws OutOfStockException 
	{
		if(p.getQuantity() < 1) {
			throw new OutOfStockException("Out of Stock: Not available");
		}
		else if(qty > p.getQuantity()) {
			throw new OutOfStockException("Out of stock: Not available upto your requirementS");
		}
		else {
			order.createOrder(p,qty);
		}
		
	}
	
	@Override
	public void removeOrder(int id) throws OrderNotFoundException{
		if(order.findOrderById(id)!= null) {
			order.removeOrder(id);
		}
		throw new OrderNotFoundException("Order does not exist");
	}
	
	

	@Override
	public Product findProductByID(int id){
		return order.findProductById(id);
	}
	
	@Override
	public List retrieveProducts() {
		return order.retrieveProducts();
	}
	
	@Override
	public List retrieveOrders() {
		return order.retrieveOrders();
	}

	
	
}
