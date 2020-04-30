package com.capg.exceptions;

public class OutOfStockException extends Exception{
	
	
	
	String msg;
	
	public OutOfStockException(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	

}
