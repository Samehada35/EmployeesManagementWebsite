package com.projet.GestionPersonnel.others;

public class Adresse {
	private int numRue, codePostal;
	private String nomRue, ville;
	
	
	
	public Adresse() {
		super();
	}

	public Adresse(int numRue, String nomRue, String ville, int codePostal) {
		super();
		this.numRue = numRue;
		this.nomRue = nomRue;
		this.ville = ville;
		this.codePostal = codePostal;
	}

	public int getNumRue() {
		return numRue;
	}

	public void setNumRue(int numRue) {
		this.numRue = numRue;
	}

	public String getNomRue() {
		return nomRue;
	}

	public void setNomRue(String nomRue) {
		this.nomRue = nomRue;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public int getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(int codePostal) {
		this.codePostal = codePostal;
	}
	
	
}
