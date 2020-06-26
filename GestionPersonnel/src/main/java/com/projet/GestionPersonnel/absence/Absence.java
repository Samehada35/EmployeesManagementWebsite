package com.projet.GestionPersonnel.absence;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.projet.GestionPersonnel.others.DateTime;

@Document
public class Absence {
	@Id
	private int idAbsence;
	private String matriculeEmp;
	private String motifAbsence;
	private DateTime dateDebAbsence;
	private DateTime dateFinAbsence;
	
	public Absence() {
		
	}
	
	

	public Absence(int idAbsence, String matriculeEmp, String motifAbsence, DateTime dateDebAbsence,
			DateTime dateFinAbsence) {
		super();
		this.idAbsence = idAbsence;
		this.matriculeEmp = matriculeEmp;
		this.motifAbsence = motifAbsence;
		this.dateDebAbsence = dateDebAbsence;
		this.dateFinAbsence = dateFinAbsence;
	}



	public int getIdAbsence() {
		return idAbsence;
	}

	public void setIdAbsence(int idAbsence) {
		this.idAbsence = idAbsence;
	}

	public String getMatriculeEmp() {
		return matriculeEmp;
	}

	public void setMatriculeEmp(String matriculeEmp) {
		this.matriculeEmp = matriculeEmp;
	}

	public String getMotifAbsence() {
		return motifAbsence;
	}

	public void setMotifAbsence(String motifAbsence) {
		this.motifAbsence = motifAbsence;
	}

	public DateTime getDateDebAbsence() {
		return dateDebAbsence;
	}

	public void setDateDebAbsence(DateTime dateDebAbsence) {
		this.dateDebAbsence = dateDebAbsence;
	}

	public DateTime getDateFinAbsence() {
		return dateFinAbsence;
	}

	public void setDateFinAbsence(DateTime dateFinAbsence) {
		this.dateFinAbsence = dateFinAbsence;
	}
	
	
}
