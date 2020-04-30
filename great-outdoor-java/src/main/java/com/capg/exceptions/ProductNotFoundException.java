package com.capg.exceptions;

public class ProductNotFoundException extends Exception
{
	String message;

	public ProductNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}