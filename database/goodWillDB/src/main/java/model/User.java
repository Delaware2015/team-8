package model;

public class User {

	private String email;
	private String name;
	private String address;
	private String phoneNum;
	private Store prefLocation;
	private int QRid;

	public User(String email, String name, String address, String phoneNum, Store prefLocation, int QRid) {
		this.email = email;
		this.name = name;
		this.address = address;
		this.phoneNum = phoneNum;
		this.prefLocation = prefLocation;
		this.QRid = QRid;
	}

	@Override
	public String toString() {
		return name + ", email: " + email; 
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public void setPrefLocation(Store prefLocation) {
		this.pregLocation = prefLocation;
	}

	public void setQRid(int QRid) {
		this.QRid = QRid;
	}

	public String getEmail() {
		return email;
	}

	public String getName() {
		return name;
	}

	public String getAddress() {
		return address;
	}

	public String getPhoneNum() {
		return phoneNum;
	}
	
	public Store getPrefLocation() {
		return prefLocation;
	}

	public int getQRid() {
		return QRid;
	}
}
