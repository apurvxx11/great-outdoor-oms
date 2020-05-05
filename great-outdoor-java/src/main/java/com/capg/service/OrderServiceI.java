package com.capg.service;

import org.springframework.stereotype.Service;
import com.capg.beans.Product;
import com.capg.exceptions.*;

import java.util.List;

@Service
public interface OrderServiceI {
	
	public void createOrder(Product p,int qty) throws OutOfStockException;
	public Product findProductByID(int id);
	public List retrieveProducts();
	public List retrieveOrders();
	public void removeOrder(int id);
	
}
