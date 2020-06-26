import { Component, OnInit } from '@angular/core';
import {EmployeService} from "../services/employe.service";
import {ActivatedRoute} from "@angular/router"
import {Employe} from "../../models/Employe.model";

@Component({
  selector: 'app-unique-employe',
  templateUrl: './unique-employe.component.html',
  styleUrls: ['./unique-employe.component.scss']
})
export class UniqueEmployeComponent implements OnInit {
  private matriculeEmp : string;
  employe : Employe;
  
  constructor(private employeService : EmployeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.matriculeEmp = this.route.snapshot.params['matricule'];
      this.employeService
          .getOneEmploye(this.matriculeEmp)
          .subscribe(
            (response)=> {
                this.employe = response;
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
          
        )
  }

}
