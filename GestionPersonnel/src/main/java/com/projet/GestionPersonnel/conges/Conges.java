package com.projet.GestionPersonnel.conges;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.projet.GestionPersonnel.others.DateTime;

@Document
public class Conges {
	@Id
	private int idConges;
	private String matriculeEmp, natureConges;
	private DateTime dateDebConges,dateFinConges;
	
	public Conges() {
		
	}

	public Conges(int idConges, String matriculeEmp, String natureConges, DateTime dateDebConges,
			DateTime dateFinConges) {
		super();
		this.idConges = idConges;
		this.matriculeEmp = matriculeEmp;
		this.natureConges = natureConges;
		this.dateDebConges = dateDebConges;
		this.dateFinConges = dateFinConges;
	}

	public int getIdConges() {
		return idConges;
	}

	public void setIdConges(int idConges) {
		this.idConges = idConges;
	}

	public String getMatriculeEmp() {
		return matriculeEmp;
	}

	public void setMatriculeEmp(String matriculeEmp) {
		this.matriculeEmp = matriculeEmp;
	}

	public String getNatureConges() {
		return natureConges;
	}

	public void setNatureConges(String natureConges) {
		this.natureConges = natureConges;
	}

	public DateTime getDateDebConges() {
		return dateDebConges;
	}

	public void setDateDebConges(DateTime dateDebConges) {
		this.dateDebConges = dateDebConges;
	}

	public DateTime getDateFinConges() {
		return dateFinConges;
	}

	public void setDateFinConges(DateTime dateFinConges) {
		this.dateFinConges = dateFinConges;
	}
	
	
}
