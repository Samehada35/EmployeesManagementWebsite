package com.projet.GestionPersonnel;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class HomeService {
	@RequestMapping(value="/", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public String test(){
		return "Server GestionPersonnel Working !";
	}
	
}
