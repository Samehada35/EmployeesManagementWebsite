package com.projet.GestionPersonnel.employe;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.projet.GestionPersonnel.others.Adresse;
import com.projet.GestionPersonnel.others.DateTime;
import com.projet.GestionPersonnel.others.Etat;
import com.projet.GestionPersonnel.others.Sexe;
import com.projet.GestionPersonnel.others.SituationFamiliale;
import com.projet.GestionPersonnel.others.TypeContrat;

@Document
public class Employe {
	@Id
	private String matricule;
	private String nomEmp,prenomEmp,lieuNaissance,nss, fonction, grade, email, mdp;
	private DateTime date_naissance, date_recrutement;
	private Adresse adresse;
	private String departement;
	private double salaire;
	private Sexe sexe;
	private SituationFamiliale situationFamiliale;
	private Etat etat;
	private TypeContrat typeContrat;
	
	public Employe() {
		
	}

	
	public Employe(String matricule, String nomEmp, String prenomEmp, String lieuNaissance, String nss, String fonction,
			String grade, String email, String mdp, DateTime date_naissance, DateTime date_recrutement, Adresse adresse,
			String departement, double salaire, Sexe sexe, SituationFamiliale situationFamiliale, Etat etat, TypeContrat typeContrat) {
		super();
		this.matricule = matricule;
		this.nomEmp = nomEmp;
		this.prenomEmp = prenomEmp;
		this.lieuNaissance = lieuNaissance;
		this.nss = nss;
		this.fonction = fonction;
		this.grade = grade;
		this.email = email;
		this.mdp = mdp;
		this.date_naissance = date_naissance;
		this.date_recrutement = date_recrutement;
		this.adresse = adresse;
		this.departement = departement;
		this.salaire = salaire;
		this.sexe = sexe;
		this.situationFamiliale = situationFamiliale;
		this.etat = etat;
		this.typeContrat = typeContrat;
	}



	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getNomEmp() {
		return nomEmp;
	}

	public void setNomEmp(String nomEmp) {
		this.nomEmp = nomEmp;
	}

	public String getPrenomEmp() {
		return prenomEmp;
	}

	public void setPrenomEmp(String prenomEmp) {
		this.prenomEmp = prenomEmp;
	}

	public String getLieuNaissance() {
		return lieuNaissance;
	}

	public void setLieuNaissance(String lieuNaissance) {
		this.lieuNaissance = lieuNaissance;
	}

	public String getNss() {
		return nss;
	}

	public void setNss(String nss) {
		this.nss = nss;
	}

	public String getFonction() {
		return fonction;
	}

	public void setFonction(String fonction) {
		this.fonction = fonction;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public DateTime getDate_naissance() {
		return date_naissance;
	}

	public void setDate_naissance(DateTime date_naissance) {
		this.date_naissance = date_naissance;
	}

	public DateTime getDate_recrutement() {
		return date_recrutement;
	}

	public void setDate_recrutement(DateTime date_recrutement) {
		this.date_recrutement = date_recrutement;
	}

	public Sexe getSexe() {
		return sexe;
	}

	public void setSexe(Sexe sexe) {
		this.sexe = sexe;
	}

	public SituationFamiliale getSituationFamiliale() {
		return situationFamiliale;
	}

	public void setSituationFamiliale(SituationFamiliale situationFamiliale) {
		this.situationFamiliale = situationFamiliale;
	}

	public Etat getEtat() {
		return etat;
	}

	public void setEtat(Etat etat) {
		this.etat = etat;
	}
	
	

	public double getSalaire() {
		return salaire;
	}

	public void setSalaire(double salaire) {
		this.salaire = salaire;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public String getDepartement() {
		return departement;
	}


	public void setDepartement(String departement) {
		this.departement = departement;
	}


	public TypeContrat getTypeContrat() {
		return typeContrat;
	}


	public void setTypeContrat(TypeContrat typeContrat) {
		this.typeContrat = typeContrat;
	}


	@Override
	public String toString() {
		return "Employe [matricule=" + matricule + ", nomEmp=" + nomEmp + ", prenomEmp=" + prenomEmp
				+ ", lieuNaissance=" + lieuNaissance + ", nss=" + nss + ", fonction=" + fonction + ", grade=" + grade
				+ ", email=" + email + ", mdp=" + mdp + ", date_naissance=" + date_naissance + ", date_recrutement="
				+ date_recrutement + ", adresse=" + adresse + ", Departement=" + departement + ", salaire="
				+ salaire + ", sexe=" + sexe + ", situationFamiliale=" + situationFamiliale + ", etat=" + etat
				+ ", typeContrat=" + typeContrat + "]";
	}




	
}
