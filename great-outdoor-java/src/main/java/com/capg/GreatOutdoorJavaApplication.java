package com.capg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.capg.beans.Product;
import com.capg.service.OrderServiceI;


@SpringBootApplication
public class GreatOutdoorJavaApplication implements CommandLineRunner {

	@Autowired
	OrderServiceI order;
	public static void main(String[] args) {
		SpringApplication.run(GreatOutdoorJavaApplication.class, args);
	}

	public void run(String... args) throws Exception{
		order.createOrder(new Product(1,"Bag",12,12000,"adidas",2,"assets/images/f_ball.jpg"),11);
		
	}

}
