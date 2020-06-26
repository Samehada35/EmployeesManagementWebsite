import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { AbsenceService } from '../services/absence.service';
import { CongesService } from '../services/conges.service';
import { Subscription } from 'rxjs';
import {Employe} from "../../models/Employe.model";
import {Absence} from "../../models/Absence.model";
import {Conges} from "../../models/Conges.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {

  employes : Employe[];
  employesSubscription : Subscription;
  absences : Absence[];
  absencesSubscription : Subscription;
  conges : Conges[];
  congesSubscription : Subscription;
  selectedState : string = "*";
  selectedGestion : string = "EMPLOYES";

  constructor(private employeService : EmployeService,private absenceService : AbsenceService,private congesService : CongesService, private router : Router) { }

  ngOnInit(): void {
      this.employesSubscription = this.employeService.employesSubject.subscribe(
        (employes : Employe[])=>{
            this.employes = employes;
        }
      )
      this.employeService.getEmployes();

      this.congesSubscription = this.congesService.congesSubject.subscribe(
        (conges : Conges[])=>{
            this.conges = conges;
            console.log(this.conges)
        }
      )
      this.congesService.getConges();

      this.absencesSubscription = this.absenceService.absencesSubject.subscribe(
        (absences : Absence[])=>{
            this.absences = absences;
        }
      )
      this.absenceService.getAbsences();

  }
  
  ngOnDestroy() {
    this.employesSubscription.unsubscribe();
    this.absencesSubscription.unsubscribe();
    this.congesSubscription.unsubscribe();
  }

  onGetEmployes(){
      this.employeService.getEmployes();
  }

  onDisplayEmploye(matricule){
      this.router.navigate(['uniqueEmployee/'+matricule]); 
  }

  onDeleteEmploye(matricule){
      this.employeService.deleteEmploye(matricule);
  }

  onModifyEmploye(matricule){
      this.employeService.modifyEmploye(matricule);
  }

  getEmployeNomFromMat(mat){
    for(let e of this.employes){
        if(e.matricule === mat){
            return e.nomEmp+" "+e.prenomEmp;
        }
    }  
      
    return "Uknown";
  }

  getEmployeSexeFromMat(mat){
    for(let e of this.employes){
        if(e.matricule === mat){
            return e.sexe;
        }
    }  
      
    return "HOMME"; 
  }

  onNewEmploye(){
      this.router.navigate(['employees-management/employe']);
  }

  onNewAbsence(){
      this.router.navigate(['employees-management/absence']);
  }

  onNewConges(){
      this.router.navigate(['employees-management/conges']);
  }
  
}
