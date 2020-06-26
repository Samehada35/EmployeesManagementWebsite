package com.projet.GestionMails.mails;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.projet.GestionMails.others.DateTime;

@Document
public class Mail {
	@Id
	public int idMail;
	public String matriculeEmp, objet, contenu;
	public DateTime date_envoi;
	
	public Mail() {
		
	}
	
	public Mail(int idMail, String matriculeEmp, String objet, String contenu, DateTime date_envoi) {
		super();
		this.idMail = idMail;
		this.matriculeEmp = matriculeEmp;
		this.objet = objet;
		this.contenu = contenu;
		this.date_envoi = date_envoi;
	}

	public int getIdMail() {
		return idMail;
	}

	public void setIdMail(int idMail) {
		this.idMail = idMail;
	}

	public String getMatriculeEmp() {
		return matriculeEmp;
	}

	public void setMatriculeEmp(String matriculeEmp) {
		this.matriculeEmp = matriculeEmp;
	}

	public String getObjet() {
		return objet;
	}

	public void setObjet(String objet) {
		this.objet = objet;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public DateTime getDate_envoi() {
		return date_envoi;
	}

	public void setDate_envoi(DateTime date_envoi) {
		this.date_envoi = date_envoi;
	}

	@Override
	public String toString() {
		return "Mail [idMail=" + idMail + ", matriculeEmp=" + matriculeEmp + ", objet=" + objet + ", contenu=" + contenu
				+ ", date_envoi=" + date_envoi + "]";
	}
	
	
	
}
