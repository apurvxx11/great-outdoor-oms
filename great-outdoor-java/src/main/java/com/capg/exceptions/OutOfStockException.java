
package com.capg.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

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
