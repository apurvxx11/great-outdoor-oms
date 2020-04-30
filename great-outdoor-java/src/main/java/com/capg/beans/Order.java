package com.capg.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="Order57")
@DynamicUpdate(true)
@DynamicInsert(true)
@SequenceGenerator(name= "OrderIDGenerator",initialValue=10000)


public class Order {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="OrderIDGenerator")
	int Order_ID;
	
	@Column
	int Quantity;

	@OneToOne
	@JoinColumn(name="Product_id", nullable=false)
	private Product product;

	public Order() {
		
	}
	public Order(int quantity, Product product) {
		super();
		Quantity = quantity;
		this.product = product;
	}

	public int getOrder_ID() {
		return Order_ID;
	}

	public void setOrder_ID(int order_ID) {
		Order_ID = order_ID;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
}
