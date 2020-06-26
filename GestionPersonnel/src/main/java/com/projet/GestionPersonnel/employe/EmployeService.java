package com.projet.GestionPersonnel.employe;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;


@CrossOrigin
@RestController
public class EmployeService {
	private ArrayList<Employe> employes;
	
	@Autowired
	private EmployeRepository employesRepository;

	public EmployeService() {
		employes = new ArrayList<>();
	}
	
	/* Réccupérer tous les employés */
	@RequestMapping(value="/employes/list", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Employe> getAllEmployes(){
		employes.clear();
		Iterable<Employe> it = employesRepository.findAll();
		for(Employe e : it) {
			employes.add(e);
		}
		return employes;
	}
	
	/* Ajouter un nouvel employé */
	@RequestMapping(value = "/employes/new", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void addEmploye(@RequestBody Employe e) throws Exception{
		employes.add(e);
		employesRepository.save(e);
	}
	
	/* Réccupérer un employé via son matricule */
	@RequestMapping(value = "/employes/list/{matricule}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public Employe getEmploye(@PathVariable(value = "matricule") String matricule){
		employes.clear();
		Iterable<Employe> it = employesRepository.findAll();
		for(Employe e : it) {
			employes.add(e);
		}
		Employe emp = employes.stream().filter(e -> e.getMatricule().equals(matricule)).findFirst().orElse(null);
		return emp;
	}
	
	/* Supprimer un employé via son matricule */
	@RequestMapping(value = "/employes/list/{matricule}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	public void deleteEmploye(@PathVariable(value = "matricule") String matricule){
		employesRepository.deleteById(matricule);
	}
}
