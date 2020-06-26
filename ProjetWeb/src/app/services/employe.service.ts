import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Employe} from "../../models/Employe.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employesSubject = new Subject<Employe[]>();
  private employes = [];
  host : string = "192.168.99.100";
  port : string = "8761";
    
  constructor(private http : HttpClient) { }
    
  emitEmployesSubject(){
      this.employesSubject.next(this.employes.slice())
  }
    
  getEmployes(){
      let headers = this.createHeaders();
    
      this.http
          .get<Employe[]>("http://"+this.host+":"+this.port+"/employes/list",{headers : headers})
          .subscribe(
            (response)=> {
                this.employes = response;
                this.emitEmployesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
          
        )
  }
        
  getOneEmploye(matricule) : Observable<Employe>{
      let headers = this.createHeaders();
    
      return this.http
          .get<Employe>("http://"+this.host+":"+this.port+"/employes/list/"+matricule,{headers : headers});

  }
  deleteEmploye(matricule){
      let headers = this.createHeaders();
      
      this.http
          .delete("http://"+this.host+":"+this.port+"/employes/list/"+matricule,{headers : headers})
          .subscribe(
            (response) => {
                this.employes = this.employes.filter((v)=>{v.matricule!=matricule})
                this.emitEmployesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
      )
  }

   
  modifyEmploye(matricule){
      
  }
    
  newEmploye(e) : Observable<any>{
      let headers = this.createHeaders();
      
      return this.http
                 .post<Employe>("http://"+this.host+":"+this.port+"/emloyes/new/",e,{headers : headers});
  }
    
  private createHeaders() : HttpHeaders{
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("accept","application/json");
      headers.append('Access-Control-Allow-Origin','*');
      return headers;
  }
  
}
