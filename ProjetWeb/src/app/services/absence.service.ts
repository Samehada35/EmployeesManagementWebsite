import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Absence} from "../../models/Absence.model";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  absencesSubject = new Subject<Absence[]>();
  private absences = [];
  host : string = "192.168.99.100";
  port : string = "8761";
    
  constructor(private http : HttpClient) { }
    
  emitAbsencesSubject(){
      this.absencesSubject.next(this.absences.slice())
  }
    
  getAbsences(){
      let headers = this.createHeaders();
    
      this.http
          .get<Absence[]>("http://"+this.host+":"+this.port+"/absences/list",{headers : headers})
          .subscribe(
            (response)=> {
                this.absences = response;
                this.emitAbsencesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
          
        )
  }
  /*
  getOneAbsence(id) : Observable<Absence>{
      let headers = this.createHeaders();
    
      return this.http
          .get<Absence>("http://localhost:8080/absences/list/"+id,{headers : headers});

  }*/
  deleteAbsence(id){
      let headers = this.createHeaders();
      
      this.http
          .delete("http://"+this.host+":"+this.port+"/absences/list/"+id,{headers : headers})
          .subscribe(
            (response) => {
                this.absences = this.absences.filter((v)=>{v.id!=id})
                this.emitAbsencesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
      )
  }

   
  modifyAbsence(id){
      
  }
    
    
  newAbsence(a){
      let headers = this.createHeaders();
      
      return this.http
                 .post<Absence>("http://"+this.host+":"+this.port+"/absences/new/",a,{headers : headers});
  }
    
  private createHeaders() : HttpHeaders{
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("accept","application/json");
      headers.append('Access-Control-Allow-Origin','*');
      return headers;
  }
}
