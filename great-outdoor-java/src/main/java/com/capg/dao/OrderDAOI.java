package com.capg.dao;

import org.springframework.stereotype.Repository;

import com.capg.beans.Order;
import com.capg.beans.Product;
import java.util.List;


@Repository
public interface OrderDAOI {
	
	public void createOrder(Product p,int qty);
	public Product findProductById(int id);
	public Order findOrderById(int id);
	public void removeOrder(int id);
	public List retrieveProducts();
	public List retrieveOrders();
}
