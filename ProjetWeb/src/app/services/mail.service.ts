import { Injectable } from '@angular/core';
import {Mail} from "../../models/Mail.model";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailService {
  mailsSubject = new Subject<Mail[]>();
  private mails = [];
  host : string = "192.168.99.100";
  port : string = "8762";
    
  constructor(private http : HttpClient) { }
    
  emitMailsSubject(){
      this.mailsSubject.next(this.mails.slice())
  }
    
  getMails(){
      let headers = this.createHeaders();
    
      this.http
          .get<Mail[]>("http://"+this.host+":"+this.port+"/mails/list",{headers : headers})
          .subscribe(
            (response)=> {
                this.mails = response;
                this.emitMailsSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
          
        )
  }
        
  getOneMail(id) : Observable<Mail>{
      let headers = this.createHeaders();
    
      return this.http
                 .get<Mail>("http://"+this.host+":"+this.port+"/mails/list/"+id,{headers : headers});

  }
  deleteMail(id){
      let headers = this.createHeaders();
      
      this.http
          .delete("http://"+this.host+":"+this.port+"/mails/list/"+id,{headers : headers})
          .subscribe(
            (response) => {
                this.mails = this.mails.filter((v)=>{v.idMail!=id})
                this.emitMailsSubject();
            },
            (error)=>{
                console.log("Erreur : "+error);
            }
      )
  }
  
  private createHeaders() : HttpHeaders{
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("accept","application/json");
      headers.append('Access-Control-Allow-Origin','*');
      return headers;
  }
}
