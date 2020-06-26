import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import {Employe} from "../../models/Employe.model";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employes : Employe[] = [];
  employesSubscription : Subscription;
    
  constructor(private employeService : EmployeService) { }


  ngOnInit(): void {
         
      this.employesSubscription = this.employeService.employesSubject.subscribe(
        (employes : Employe[])=>{
            this.employes = employes;
        }
      )
      
      this.employeService.getEmployes();
  }
  
  getCount(type : string){
      if(type==="ALL"){
          return this.employes.length;
      }
      var emps = [];
      
      for(let e of this.employes){
          if(e.typeContrat === type){
              emps.push(e);
          }
      }
      
      return emps.length;
  }

}
