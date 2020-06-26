package com.projet.GestionPersonnel.employe;

import org.springframework.data.repository.CrudRepository;

public interface EmployeRepository extends CrudRepository<Employe,String>{
	
    Employe findByMatricule(String matricule);
}
