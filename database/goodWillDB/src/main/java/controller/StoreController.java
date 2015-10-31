package controller;

import model.Store;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class StoreController {

	@RequestMapping(value = "/Store", method = RequestMethod.GET)
	public Store store(@RequestParam(value="location", defaultValue="n/a") String location,
							@RequestParam(value="topsSold", defaultValue="-1") int topsSold,
							@RequestParam(value="topsRecycled", defaultValue="-1") int topsRecycled,
							@RequestParam(value="bottemsSold", defaultValue="-1") int bottemsSold, 
							@RequestParam(value="bottemsRecycled", defaultValue="-1") int bottemsRecycled, 
							@RequestParam(value="dressesSold", defaultValue="-1") int dressesSold,
							@RequestParam(value="dressesRecyle", defaultValue="-1") int dressesRecyle,
							@RequestParam(value="shoesSold", defaultValue"-1") int shoesSold,
							@RequestParam(value="shoesRecycled", defaultValue"-1") int shoesRecycled,
							@RequestParam(value="income", defaultValue"-1") int income) {

		return new Store(location,topsSold,topsRecycled,bottemsSold,bottemsRecycled,dressesSold,
			dressesRecyle, shoesSold, shoesRecycled, income);
	}

}