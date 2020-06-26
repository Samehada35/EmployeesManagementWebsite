import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { AbsenceService } from '../services/absence.service';
import { CongesService } from '../services/conges.service';
import { Subscription } from 'rxjs';
import {Employe} from "../../models/Employe.model";
import {Absence} from "../../models/Absence.model";
import {Conges} from "../../models/Conges.model";
import {ActivatedRoute} from "@angular/router"
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees-creation',
  templateUrl: './employees-creation.component.html',
  styleUrls: ['./employees-creation.component.scss']
})

export class EmployeesCreationComponent implements OnInit {
   type : string;
   form : FormGroup;
    
  constructor(private employeService : EmployeService,private absenceService : AbsenceService,private congesService : CongesService,private route: ActivatedRoute,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];
      this.initForm();
  }
    
  initForm(){
      switch(this.type){
          case "employe":
              this.form = this.formBuilder.group({
                    matricule : '',
                    nomEmp : '',
                    prenomEmp : '',
                    lieuNaissance : '',
                    nss : '',
                    fonction : '',
                    grade : '',
                    email : '',
                    mdp : '',
                    date_naissance : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0},
                    date_recrutement : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0},
                    adresse : this.formBuilder.group({numRue : 0,codePostal : 0, nomRue : '',ville : ''}),
                    departement : '',
                    salaire : 0,
                    sexe : '',
                    situationFamiliale : '',
                    etat : '',
                    typeContrat : ''
              });
              break;
          case "absence":
              this.form = this.formBuilder.group({
                    idAbsence : 0,
                    matriculeEmp : '',
                    motifAbsence : '',
                    dateDebAbsence : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0},
                    dateFinAbsence : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0}
              });
              break;
          case "conges":
              this.form = this.formBuilder.group({
                    idConges : 0,
                    matriculeEmp : '',
                    motifConges : '',
                    dateDebConges : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0},
                    dateFinConges : {annee : 0, mois : 0, jours : 0, heure : 0, minute : 0}
              });
      }
  }
    
  onSubmitForm(){
      const formValue = this.form.value;
      switch(this.type){
          case "employe":
              var naiss = new Date(formValue['date_naissance']);
              var recrut = new Date(formValue['date_recrutement']);
              
              var emp = {
                    matricule : formValue['matricule'],
                    nomEmp : formValue['nomEmp'],
                    prenomEmp : formValue['prenomEmp'],
                    lieuNaissance : formValue['lieuNaissance'],
                    nss : formValue['nss'],
                    fonction : formValue['fonction'],
                    grade : formValue['grade'],
                    email : formValue['email'],
                    mdp : formValue['mdp'],
                    date_naissance : {annee : naiss.getFullYear(), 
                                      mois : naiss.getMonth(), 
                                      jours : naiss.getDate(), 
                                      heure : 0, 
                                      minute : 0},
                    date_recrutement : {annee : recrut.getFullYear(), 
                                        mois : recrut.getMonth(), 
                                        jours : recrut.getDate(), 
                                        heure : 0, 
                                        minute : 0},
                    adresse : {numRue : formValue['adresse'].numRue,
                               codePostal : formValue['adresse'].codePostal, 
                               nomRue : formValue['adresse'].nomRue,
                               ville : formValue['adresse'].ville},
                    departement : formValue['departement'],
                    salaire : formValue['salaire'],
                    sexe : formValue['sexe'],
                    situationFamiliale : formValue['situationFamiliale'],
                    etat : formValue['etat'],
                    typeContrat : formValue['typeContrat']
              };
              console.log(emp);
              this.employeService.newEmploye(emp).subscribe((response)=>{
                  console.log(response)
              },(err)=>{
                  console.log("Erreur : " + err);
              });
              break;
          case "absence":
              var debAbsence = new Date(formValue['dateDebAbsence']);
              var finAbsence = new Date(formValue['dateFinAbsence']);
              console.log(debAbsence);
              var abs = {
                    idAbsence : 0,
                    matriculeEmp : formValue['matriculeEmp'],
                    motifAbsence : formValue['motifAbsence'],
                    dateDebAbsence : {annee : debAbsence.getFullYear(), 
                                      mois : debAbsence.getMonth(), 
                                      jours : debAbsence.getDate(), 
                                      heure : 0, 
                                      minute : 0},
                    dateFinAbsence : {annee : finAbsence.getFullYear(), 
                                      mois : finAbsence.getMonth(), 
                                      jours : finAbsence.getDate(), 
                                      heure : 0, 
                                      minute : 0},
              };
              console.log(abs);
              this.absenceService.newAbsence(abs).subscribe((response)=>{
                  console.log(response)
              },(err)=>{
                  console.log("Erreur : " + err);
              });
              break;
          case "conges":        
              var debConges = new Date(formValue['dateDebConges']);
              var finConges = new Date(formValue['dateFinConges']);      
              var cong = {
                    idConges : 0,
                    matriculeEmp : formValue['matriculeEmp'],
                    motifConges : formValue['motifConges'],
                    dateDebConges : {annee : debConges.getFullYear(), 
                                     mois : debConges.getMonth(), 
                                     jours : debConges.getDate(), 
                                     heure : 0, 
                                     minute : 0},
                    dateFinConges : {annee : finConges.getFullYear(), 
                                     mois : finConges.getMonth(), 
                                     jours : finConges.getDate(), 
                                     heure : 0, 
                                     minute : 0},
              };
              console.log(cong);
              this.congesService.newConges(cong).subscribe((response)=>{
                  console.log(response)
              },(err)=>{
                  console.log("Erreur : " + err);
              });
              break;
      }
  }
    

}
