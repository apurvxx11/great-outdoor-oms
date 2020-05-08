package com.capg.service;

import org.springframework.stereotype.Service;

import com.capg.beans.Order;
import com.capg.beans.Product;
import com.capg.exceptions.*;

import java.util.List;

@Service
public interface OrderServiceI {
	
	public void createOrder(Product p,int qty) throws OutOfStockException;
	public void removeOrder(int id) throws OrderNotFoundException;
	public Product findProductByID(int id);
	public List retrieveProducts();
	public List retrieveOrders();
	
	
}
