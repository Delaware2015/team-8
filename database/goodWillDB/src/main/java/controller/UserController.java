package controller;

import model.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class UserController {

    @RequestMapping(value = "/User", method = RequestMethod.GET)
    public User user(@RequestParam(value="email", defaultValue="foo@bar.com") String email,
    						 @RequestParam(value="name", defaultValue="bob") String name,
    						 @RequestParam(value="address", defaultValue="n/a") String address,
    						 @RequestParam(value="phoneNum", defaultValue="0000000000") String phoneNum,
    						 @RequestParam(value="storeID", defaultValue="-1") int storeID,
    						 @RequestParam(value="QRid", defaultValue="-1") int QRid) {
        
        return new User(email, name, address, phoneNum, storeID, QRid);
    }
}