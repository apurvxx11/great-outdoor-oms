package com.capg.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.capg.beans.Order;
import com.capg.beans.Product;

@Transactional
@Repository

public class OrderDAOImpl implements OrderDAOI {

	@PersistenceContext
	EntityManager em;
	
	@Override
	public void createOrder(Product p,int qty) {
		Order tmp_order = new Order();
		tmp_order.setProduct(p);
		tmp_order.setQuantity(qty);
		em.persist(tmp_order);
	}
	
	@Override
	public Product findProductById(int id) {
		 return em.find(Product.class, id);
	}

	@Override
	public Order findOrderById(int id) {
		return em.find(Order.class, id);
	}
	
	@Override
	public void removeOrder(int id) {
	Order o=em.find(Order.class, id); 
	System.out.println(o.getOrder_ID() + "this order is deleted");
	em.remove(o);
	}
	
	@Override
	public List retrieveProducts() {
		Query q = em.createQuery("from Product p");
		return q.getResultList();
	}
	
	@Override
	public List retrieveOrders() {
		Query q = em.createQuery("from Order o");
		return q.getResultList();
	}

}
