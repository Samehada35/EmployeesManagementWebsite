import {DateTime} from "./DateTime.model"
import {Adresse} from "./Adresse.model"

export class Employe{
    matricule : string;
    nomEmp : string;
    prenomEmp : string;
    lieuNaissance : string;
    nss : string;
    fonction : string;
    grade : string;
    email : string;
    mdp : string;
    date_naissance : DateTime;
    date_recrutement : DateTime;
    adresse : Adresse;
    departement : string;
    salaire : number;
    sexe : string;
    situationFamiliale : string;
    etat : string;
    typeContrat : string;
}