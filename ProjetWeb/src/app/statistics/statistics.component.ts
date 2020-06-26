import { AfterViewInit, Component, OnInit,ElementRef,ViewChild,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { EmployeService } from '../services/employe.service';
import { AbsenceService } from '../services/absence.service';
import { CongesService } from '../services/conges.service';
import { Subscription } from 'rxjs';
import {Employe} from "../../models/Employe.model";
import {Absence} from "../../models/Absence.model";
import {Conges} from "../../models/Conges.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  employes : Employe[];
  employesSubscription : Subscription;
  absences : Absence[];
  absencesSubscription : Subscription;
  conges : Conges[];
  congesSubscription : Subscription;
  selectedStat : string = "stat1";
  canvas : HTMLElement;
  canvasContainer : HTMLElement;
  chart : any;
    
  constructor(private employeService : EmployeService,private absenceService : AbsenceService,private congesService : CongesService) { 

  }

  ngOnInit(): void {
      this.employesSubscription = this.employeService.employesSubject.subscribe(
        (employes : Employe[])=>{
            this.employes = employes;
      
    // @ts-ignore
          var ctx = this.canvas.getContext('2d');
      
    // @ts-ignore
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Actif', 'Retraité', 'Congés', 'Suspendu', 'Licencié', 'Mis en disponibilité'],
                datasets: [{
                    label: 'Etats employés',
                    backgroundColor: ['#9acd4c', '#faa93a', '#d35940', '#b258d3', '#63a0cc', '#8ac4a7'],
                    data: [this.employes.filter(x => x['etat']=="ACTIF").length, 
                           this.employes.filter(x => x['etat']=="RETRAITE").length,
                           this.employes.filter(x => x['etat']=="EN_CONGES").length,
                           this.employes.filter(x => x['etat']=="SUSPENDU").length,
                           this.employes.filter(x => x['etat']=="LICENCIE").length,
                           this.employes.filter(x => x['etat']=="MIS_EN_DISPONIBILITE").length
                           ]
                }]
            },
            options: {}
        });
        }
      )
      this.employeService.getEmployes();

      this.congesSubscription = this.congesService.congesSubject.subscribe(
        (conges : Conges[])=>{
            this.conges = conges;
        }
      )
      this.congesService.getConges();

      this.absencesSubscription = this.absenceService.absencesSubject.subscribe(
        (absences : Absence[])=>{
            this.absences = absences;
        }
      )
      this.absenceService.getAbsences();
  
    this.canvas = document.getElementById("chart") as HTMLElement;
    this.canvasContainer = document.getElementById("canvas-container") as HTMLElement;

  }
  
  ngOnDestroy() {
    this.employesSubscription.unsubscribe();
    this.absencesSubscription.unsubscribe();
    this.congesSubscription.unsubscribe();
  }

  showGraph(){
    this.canvasContainer.innerHTML = "<canvas id='chart'></canvas>";
    this.canvas = document.getElementById("chart") as HTMLElement;
    // @ts-ignore
    var ctx = this.canvas.getContext('2d');

    if(this.selectedStat=="stat1"){
    // @ts-ignore
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Actif', 'Retraité', 'Congés', 'Suspendu', 'Licencié', 'Mis en disponibilité'],
                datasets: [{
                    label: 'Etats employés',
                    backgroundColor: ['#9acd4c', '#faa93a', '#d35940', '#b258d3', '#63a0cc', '#8ac4a7'],
                    data: [this.employes.filter(x => x['etat']=="ACTIF").length, 
                           this.employes.filter(x => x['etat']=="RETRAITE").length,
                           this.employes.filter(x => x['etat']=="EN_CONGES").length,
                           this.employes.filter(x => x['etat']=="SUSPENDU").length,
                           this.employes.filter(x => x['etat']=="LICENCIE").length,
                           this.employes.filter(x => x['etat']=="MIS_EN_DISPONIBILITE").length
                           ]
                }]
            },
            options: {}
        });
    }else if(this.selectedStat=="stat2"){
    // @ts-ignore
            this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Homme', 'Femme'],
                datasets: [{
                    label: 'Sexes',
                    backgroundColor: ['#63a0cc','#d35940'],
                    data: [this.employes.filter(x => x['sexe']=="HOMME").length, 
                           this.employes.filter(x => x['sexe']=="FEMME").length
                           ]
                }]
            },
            options: {}
        });   
    }else if(this.selectedStat=="stat3"){
        var ages = this.employes.map(x => this.getAgeFromDate(x['date_naissance']));
        
    // @ts-ignore
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Moins de 25 ans", "25-40 ans", "Plus de 40 ans"],
                datasets: [{
                    label: 'Ages',
                    backgroundColor: '#75c5ff',
                    data: [ages.filter(x=>x<25).length,
                           ages.filter(x=>x>=25&&x<40).length,
                           ages.filter(x=>x>=40).length]
                }]
            },
            options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
        });   
    }else if(this.selectedStat=="stat4"){
        var data = {};
        for(let e of this.employes){
            if(data[e["departement"]]===undefined){
                data[e["departement"]] = 1;
            }else{
                data[e["departement"]]++;
            }
        }
        
    // @ts-ignore
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Départements',
                    backgroundColor: '#477bd1',
                    data: Object.values(data)
                }]
            },
            options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
        }); 
    }
  }

  getAgeFromDate(date) : number{
      var years = parseInt(date["annee"]);
      var months = parseInt(date["mois"])-1;
      var days = parseInt(date["jour"]);
      var d = new Date(years,months,days);
      var ageDifMs = Date.now() - d.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
