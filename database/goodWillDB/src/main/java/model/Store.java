package model;

public class Store {

	private String location;
	private int topsSold;
	private int topsRecycled;
	private int bottomsSold;
	private int bottomsRecycled;
	private int dressesSold;
	private int dressesRecycled;
	private int shoesSold;
	private int shoesRecycled;
	private double income;

	public Store(String location, int topsSold, int topsRecycled, int bottomsSold, int bottomsRecycled, 
					int dressesSold, int dressesRecycled, int shoesSold, int shoesRecycled, double income) {
		this.location = location;
		this.topsSold = topsSold;
		this.topsRecycled = topsRecycled;
		this.bottomsSold = bottomsSold;
		this.bottomsRecycled = bottomsRecycled;
		this.dressesSold = dressesSold;
		this.dressesRecycled = dressesRecycled;
		this.shoesSold = shoesSold;
		this.shoesRecycled = shoesRecycled;
		this.income = income;
		
	}

	public void setLocation(String location) {

	}	

}
