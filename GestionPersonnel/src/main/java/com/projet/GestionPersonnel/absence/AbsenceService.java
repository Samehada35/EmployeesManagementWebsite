package com.projet.GestionPersonnel.absence;

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

import com.projet.GestionPersonnel.conges.Conges;
import com.projet.GestionPersonnel.employe.Employe;


@CrossOrigin
@RestController
public class AbsenceService {
	private ArrayList<Absence> absences;
	
	@Autowired
	private AbsenceRepository absencesRepository;

	public AbsenceService() {
		absences = new ArrayList<>();
	}
	
	
	/* Réccupérer toutes les absences */
	@RequestMapping(value="/absences/list", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Absence> getAllAbsences(){
		absences.clear();
		Iterable<Absence> it = absencesRepository.findAll();
		for(Absence a : it) {
			absences.add(a);
		}
		return absences;
	}	
	
	/* Réccupérer toutes les absences d'un employé */
	@RequestMapping(value="/absences/list/{matricule}", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Absence> getEmployeAbsences(@PathVariable(value = "matricule") String matricule){
		ArrayList<Absence> empAbsences = new ArrayList<Absence>();
		for(Absence a : absences) {
			if(a.getMatriculeEmp().equals(matricule)) {
				empAbsences.add(a);
			}
		}
		return empAbsences;
	}
	
	/* Ajouter une nouvelle absence */
	@RequestMapping(value = "/absences/new", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void addAbsence(@RequestBody Absence a) throws Exception{
		System.out.println(a);
		int id=0;
		for(Absence abs : absencesRepository.findAll()) {
			if(abs.getIdAbsence()>id) {
				id = abs.getIdAbsence();
			}
		}
		a.setIdAbsence(id+1);
		absences.add(a);
		absencesRepository.save(a);
	}
	
	/* Réccupérer une absence via son id */
	@RequestMapping(value = "/absences/show/{id}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public Absence getEmploye(@PathVariable(value = "id") int id){
		Absence abs = absences.stream().filter(a -> a.getIdAbsence() == id).findFirst().orElse(null);
		return abs;
	}
}
