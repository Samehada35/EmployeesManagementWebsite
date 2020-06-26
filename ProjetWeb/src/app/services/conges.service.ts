import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Conges} from "../../models/Conges.model";

@Injectable({
  providedIn: 'root'
})
export class CongesService {

  congesSubject = new Subject<Conges[]>();
  private conges = [];
  host : string = "192.168.99.100";
  port : string = "8761";
    
  constructor(private http : HttpClient) { }
    
  emitCongesSubject(){
      this.congesSubject.next(this.conges.slice())
  }
    
  getConges(){
      let headers = this.createHeaders();
    
      this.http
          .get<Conges[]>("http://"+this.host+":"+this.port+"/conges/list",{headers : headers})
          .subscribe(
            (response)=> {
                this.conges = response;
                this.emitCongesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
          
        )
  }
  /*
  getOneConges(id) : Observable<Conges>{
      let headers = this.createHeaders();
    
      return this.http
          .get<Conges>("http://localhost:8080/conges/list/"+id,{headers : headers});

  }*/
  deleteConges(id){
      let headers = this.createHeaders();
      
      this.http
          .delete("http://"+this.host+":"+this.port+"/conges/list/"+id,{headers : headers})
          .subscribe(
            (response) => {
                this.conges = this.conges.filter((v)=>{v.id!=id})
                this.emitCongesSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
      )
  }

   
  modifyConges(id){
      
  }
    
        
  newConges(c){
      let headers = this.createHeaders();
      
      return this.http
                 .post<Conges>("http://"+this.host+":"+this.port+"/conges/new/",c,{headers : headers});
  }
    
  private createHeaders() : HttpHeaders{
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("accept","application/json");
      headers.append('Access-Control-Allow-Origin','*');
      return headers;
  }
}
