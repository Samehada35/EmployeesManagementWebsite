package com.projet.GestionPersonnel.conges;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projet.GestionPersonnel.absence.Absence;


@CrossOrigin
@RestController
public class CongesService {
	private ArrayList<Conges> conges;
	
	@Autowired
	private CongesRepository congesRepository;
	
	public CongesService() {
		conges = new ArrayList<>();
	}
	
	
	/* Réccupérer toutes les absences */
	@RequestMapping(value="/conges/list", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Conges> getAllConges(){
		conges.clear();
		Iterable<Conges> it = congesRepository.findAll();
		for(Conges c : it) {
			conges.add(c);
		}
		return conges;
	}	
	
	/* Réccupérer toutes les absences d'un employé */
	@RequestMapping(value="/conges/list/{matricule}", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Conges> getEmployeConges(@PathVariable(value = "matricule") String matricule){
		ArrayList<Conges> empConges = new ArrayList<Conges>();
		for(Conges c : conges) {
			if(c.getMatriculeEmp().equals(matricule)) {
				empConges.add(c);
			}
		}
		return empConges;
	}
	
	/* Ajouter un nouveau congés */
	@RequestMapping(value = "/conges/new", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void addConges(@RequestBody Conges c) throws Exception{
		System.out.println(c);
		int id=0;
		for(Conges con : congesRepository.findAll()) {
			if(con.getIdConges()>id) {
				id = con.getIdConges();
			}
		}
		c.setIdConges(id+1);
		conges.add(c);
		congesRepository.save(c);
	}
	
	/* Réccupérer une absence via son id */
	@RequestMapping(value = "/conges/show/{id}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public Conges getEmploye(@PathVariable(value = "id") int id){
		Conges con = conges.stream().filter(c -> c.getIdConges() == id).findFirst().orElse(null);
		return con;
	}
}
